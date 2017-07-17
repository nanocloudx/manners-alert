<template>
  <div>
    <div class="content">
      <div class="loading" v-show="!mapImageUri">
        <img class="loading-image" src="~assets/images/space_jinkoueisei.png" />
        <p class="loading-message">{{loadingMessage}}</p>
        <p class="tips">※GPS機能を利用するには許可が必要な場合があります。</p>
      </div>
      <div class="map">
        <img :src="mapImageUri" />
      </div>
    </div>
    <button-component
      :isDisable="!address.postal"
      :message="'この位置を報告する'"
      :optionMessage="address.formatted"
      :onSelect="onClickConfirmLocationButton"
    ></button-component>
  </div>
</template>

<script>
  import axios from '~plugins/axios'
  import ButtonComponent from '~components/parts/ButtonComponent.vue'
  export default {
    components: {
      ButtonComponent
    },
    data() {
      return {
        loadingMessage: 'GPS情報を取得しています...',
        locationWatchId: null,
        mapImageUri: null,
        address: {},
        formattedAddress: null
      }
    },
    mounted() {
      this.fetchLocation()
      window.ga('set', 'page', '/wizard#locationSelect')
      window.ga('send', 'pageview')
    },
    methods: {
      onClickConfirmLocationButton() {
        navigator.geolocation.clearWatch(this.locationWatchId)
      this.$emit('onSelectLocation', this.address, this.formattedAddress)
    },
      fetchLocation() {
        this.locationWatchId = navigator.geolocation.watchPosition((position) => {
          const lat = position.coords.latitude
        const lng = position.coords.longitude
        this.mapImageUri = this._getStaticMapsAPI(lat, lng)
          this._fetchGeocodingAPI(lat, lng).then(result => {
            this.address = result.address
            this.formattedAddress = result.formattedAddress
        })
        }, () => {
          this.loadingMessage = 'GPS情報の取得に失敗しました...'
        })
      },
      _getStaticMapsAPI(lat, lng) {
        const apiKey = 'AIzaSyCBn2AYb3w1N4-X_ey0N3stCEWnJ--BKWs'
        const size = '360x640'
        const scale = '2'
        const zoom = '17'
        return `https://maps.googleapis.com/maps/api/staticmap?key=${apiKey}&size=${size}&zoom=${zoom}&scale=${scale}&markers=${lat},${lng}&center=${lat},${lng}`
      },
      _fetchGeocodingAPI(latitude, longitude) {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}`).then(result => {
          const formattedAddress = result.data.results[0]['formatted_address']
          let address = {latitude, longitude}
          result.data.results[0]['address_components'].reverse().forEach((data) => {
            data.types.forEach(type => {
              switch (type) {
                case 'postal_code':
                  address.postal = data['long_name']
                  break
                case 'country':
                  address.country = data['long_name']
                  break
                case 'administrative_area_level_1':
                  address.pref = data['long_name']
                  break
                case 'locality':
                  address.city = data['long_name']
                  break
                case 'sublocality_level_1':
                  address.district = data['long_name']
                  break
                case 'sublocality_level_2':
                  address.address = data['long_name']
                  break
                case 'sublocality_level_3':
                case 'sublocality_level_4':
                case 'sublocality_level_5':
                  if (!address.number) {
                    address.number = data['long_name']
                  } else {
                    address.number += '-' + data['long_name']
                  }
                  break
              }
            })
          })
          return {address, formattedAddress}
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    margin-bottom: 110px;
  }
  .loading {
    margin: 30px 0;
    text-align: center;
    .loading-image {
      width: 50%;
      display: block;
      margin: 0 auto;
    }
    .loading-message {
      font-size: 18px;
      font-weight: bold;
    }
    .tips {
      font-size: 12px;
      color: #777777;
    }
  }
  .map {
    img {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      margin: auto;
    }
  }
</style>

import Sequelize from 'sequelize'
import database from '../database'

const Age = database.define('age', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING
},{
  timestamps: false
})

Age.sync({force: false}).then(() => {
  return Age.bulkCreate(Age.staticData)
})

Age.staticData = [{
  id: 1,
  name: '10代以下'
},{
  id: 2,
  name: '20代~30代'
},{
  id: 3,
  name: '40代~50代'
},{
  id: 4,
  name: '60代以上'
}]

export default Age

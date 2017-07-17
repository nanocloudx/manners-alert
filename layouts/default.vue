<template>
  <div class="layout">
    <nuxt/>
  </div>
</template>

<script>

export default {
}
</script>

<style>
  @import url(//fonts.googleapis.com/earlyaccess/roundedmplus1c.css);

  html, body, p, ol, ul, li, dl, dt, dd, blockquote,
  figure, fieldset, legend, textarea, pre, iframe,
  hr, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-family: 'Rounded Mplus 1c', sans-serif;
    font-weight: 300;
    color: #555555;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: normal;
  }
  ul {
    list-style: none;
  }
  button, input, select, textarea {
    margin: 0;
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  body {
    font-size: 1.6rem;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  img, embed, object, audio, video {
    height: auto;
    max-width: 100%;
  }
  iframe {
    border: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td, th {
    padding: 0;
    text-align: left;
  }
</style>

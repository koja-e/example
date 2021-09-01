<template>
  <div id="app">
    <p><router-link to="/barcode">バーコード撮影</router-link></p>
    <p><router-link to="/character_recognition">原材料名撮影</router-link></p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  },
  watch: {
  },
  mounted () {
    this.mTest()
  },
  methods: {
    async mTest () {
      await this.$store.dispatch('signIn')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

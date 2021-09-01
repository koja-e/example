<template>
  <div id="app">
    <p @click="$router.push('/barcode')">バーコード撮影</p>
    <p @click="$router.push('/character_recognition')">原材料名撮影</p>
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

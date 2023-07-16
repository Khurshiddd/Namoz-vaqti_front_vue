<template>

  <div>
    <Navbar/>
    <Body/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import Body from './components/Body.vue';
import Footer from './components/Footer.vue';

export default {
    components: { Navbar, Footer, Body }
}
</script>
<style>
  
</style>
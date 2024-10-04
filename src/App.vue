<template>
      <BasCard>
      <h2>Das ist der Inhalt der Karte</h2>
      <p>Hier steht mehr Text in der Karte.</p>
    </BasCard>
</template>

<script>
import BasCard from './components/BasCard.vue';

export default {
  name: 'App',
  components: {
    BasCard
  }
}

</script>

<style>
#body{
margin: 0;
}
#app {
background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
width: 100%;
height: 100vh;
color: white;
padding: 300px;
box-sizing: border-box;
}
</style>

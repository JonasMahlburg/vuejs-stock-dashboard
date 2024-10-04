<template>
  <div class="bas-card">
    <!-- Hier kannst du den Inhalt der Karte einfügen -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BasCard',
}
</script>

<style scoped>
.bas-card {
  border-radius: 16px;
  padding: 20px 32px;
  background: #011F35;
  margin-top: 20px;
}
</style>
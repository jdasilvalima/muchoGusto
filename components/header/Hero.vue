<template>
  <div class="header-hero green-theme">
    <div class="header-hero-text">
      <p>Rooftop</p>
      <p>Paris Market</p>
      <p>Paris</p>
    </div>
   <h1 :style="{'font-size': fontSize + 'rem'}">muchoGusto</h1>
 </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const initialFontSize = 14.5;
let fontSize = ref<number>(initialFontSize);

onMounted(() => {
  window.addEventListener('scroll', modifyTextSize);
});

onUnmounted(() => {
  window.removeEventListener('scroll', modifyTextSize);
});

function modifyTextSize() {
  const currentPagePosition = window.scrollY;
  fontSize.value = initialFontSize - (currentPagePosition * 0.01)
}
</script>

<style scoped>
.header-hero {
  font-family: 'CakoRegular', sans-serif;
  height: 100vh;
}

.header-hero-text {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size: 2rem;
  text-transform: uppercase;
}

h1 {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: center bottom;
}
</style>
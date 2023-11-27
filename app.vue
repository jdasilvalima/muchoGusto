<template>
  <div ref="scrollWraper" id="smooth-scroll-wrapper">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const scrollWraper = ref<HTMLElement | null>(null);
let callScroll: number | null = null;
const speed = 0.04;
let lastOffset = 0;
let offset = 0;

function smoothScroll() {
  if (scrollWraper.value) {
    offset += (window.scrollY - offset) * speed;
    if (offset !== lastOffset) {
      const scroll = `translateY(-${offset}px) translateZ(0)`;
      scrollWraper.value.style.transform = scroll;
      lastOffset = offset;
    }
    callScroll = requestAnimationFrame(smoothScroll);
  }
}

onMounted(() => {
  if (scrollWraper.value) {
    const height = scrollWraper.value.getBoundingClientRect().height - 1;
    document.body.style.height = `${Math.floor(height)}px`;
    callScroll = requestAnimationFrame(smoothScroll);
  }
});

onUnmounted(() => {
  if (callScroll !== null) {
    cancelAnimationFrame(callScroll);
  }
});
</script>
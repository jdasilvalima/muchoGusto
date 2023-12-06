import { ref, onMounted, onUnmounted } from 'vue';

export function useElementVisibility() {
  const isVisible = ref(false);
  let observer: IntersectionObserver;

  const observedElement = ref<HTMLElement | null>(null);

  function callback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach(entry => {
      isVisible.value = entry.isIntersecting;
    });
  };

  onMounted(() => {
    observer = new IntersectionObserver(callback);
    if (observedElement.value) {
      observer.observe(observedElement.value);
    }
  });

  onUnmounted(() => {
    if (observer && observedElement.value) {
      observer.unobserve(observedElement.value);
    }
  });

  return { observedElement, isVisible };
}
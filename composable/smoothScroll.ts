import { ref, onMounted, onUnmounted } from 'vue';

export function useSmoothScrollMove() {
  const element = ref<HTMLElement | null>(null);
  let lastScrollTop = 0;

  // Fonction pour déplacer l'élément lors du scroll
  const onScroll = () => {
    if (element.value) {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const deltaY = currentScroll - lastScrollTop;
      lastScrollTop = currentScroll;
      
      // Mettre à jour la position Y de l'élément
      element.value.style.transform = `translateY(${deltaY}px)`;
    }
  };

  // Fonction pour lier l'élément et ajouter l'écouteur d'événement de scroll
  const bindElement = (el: HTMLElement | null) => {
    if(el) {
      element.value = el;
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  };

  // Nettoyage à la destruction du composant
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });

  return { bindElement };
}
<template>
  <div class="se-bebe green-theme">
   <p class="text-highlight">Se Bebe</p>

   <div class="container-img">
    <img ref="seBebeImageElement" class="sebebe-img" src="~/assets/img/sebebe-img.png" alt="People drinking image" width="500">
    <div>Cet élément est {{ isVisible.get(seBebeImageElement!) ? 'visible' : 'invisible' }}.</div> 
  </div>

   <div class="sebebe-table">
    <div class="sebebe-table-wrap">
      <div class="sebebe-table-col">
        <div>Cet élément 2 est {{ isVisible.get(seBebeTextElement!) ? 'visible' : 'invisible' }}.</div> 
        <div ref="seBebeTextElement" class="sebebe-table-col-inner text-highlight">
          BEBE
        </div>
      </div>
      <div class="sebebe-table-col">
        <div class="sebebe-table-col-inner paragraph">
          Structured around a central bar at the
          wide range of wines, beers and
          cocktails. Muchacha will make you
          sure to travel in a frame
          enchanting. Piña coladas good
          frozen, Mojitos on fire, we
          offers the best cocktails
          in the best atmosphere!
        </div>
      </div>
    </div>
   </div>

   <div class="sebebe-tagline">
    <div class="sebebe-tagline-line">
      Havana Bonita Sangria Pina Colada pisco Mojito Aperol Spritz
    </div>
    <div class="sebebe-tagline-line">
      Havana Bonita Sangria Pina Colada pisco Mojito Aperol Spritz
    </div>
    <div class="sebebe-tagline-line">
      Havana Bonita Sangria Pina Colada pisco Mojito Aperol Spritz
    </div>
   </div>

  </div>
</template>

<script setup lang="ts">
import { useElementsVisibility } from '@/composable/showSeveralElements';

const { observedElements, isVisible } = useElementsVisibility();
const seBebeImageElement = ref<HTMLElement | null>(null);
const seBebeTextElement = ref<HTMLElement | null>(null);

setElementRef(seBebeImageElement.value);
setElementRef(seBebeTextElement.value);

function setElementRef(el: HTMLElement | null) {
  if (el) observedElements.value.push(ref(el));
}

</script>

<style scoped>
.se-bebe {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-highlight {
  font-family: 'CakoRegular', sans-serif;
  font-size: 5rem;
  text-transform: uppercase;
}

.sebebe-table-wrap {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  justify-content: stretch;
}

.sebebe-table-col {
  height: 100%;
  display: grid;
  align-items: center;
}
</style>
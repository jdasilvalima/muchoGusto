<template>
  <div class="se-bebe green-theme">
   <p>Se Bebe</p>
   <div class="container-img">
    <img class="sebebe-img" src="~/assets/img/sebebe-img.png" alt="People drinking image" width="500" v-scroll-fade>
   </div>
  </div>
</template>

<style scoped>
.se-bebe {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'CakoRegular', sans-serif;
  font-size: 5rem;
  text-transform: uppercase;
}

.sebebe-img {
  max-width: 100%;
  max-height: 100%;
  mask-image: linear-gradient(to bottom, transparent 0%, black 100%);
  mask-position: center;
  mask-size: 20% 100%;
  transition: mask-size 0.5s;
}
</style>
<template>
  <section class="py-10 mx-5 md:mx-20 lg:mx-40">
    <h2 class="text-4xl md:text-5xl font-bold text-center">
      {{ sectionTitle }}
    </h2>
    <p class="mt-5 text-lg md:text-xl text-center">
      {{ aboutText }}
    </p>
  </section>
</template>

<script setup>
import { ref } from "vue";

const sectionTitle = ref("About Me");
const aboutText = ref(
  `I’m a passionate developer with a knack for creating user-friendly applications.
   I love coding and constantly learning new technologies. My love of coding drives me 
   internally and I relish every opportunity to tackle the deepest technical challenges. 
   From developing a user-friendly frontend to building reliable web servers, I've worked 
   on many projects.`
);
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  max-width: 800px;
  line-height: 1.6;
}

@media (min-width: 768px) {
  p {
    padding: 0 40px;
  }
}
</style>

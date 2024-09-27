<template>
  <section class="py-10 w-full h-auto mx-5 md:mx-10">
    <h2 class="text-4xl md:text-5xl font-bold text-center">Skills</h2>
    <ul class="mt-5 w-full flex flex-wrap justify-center gap-5 md:gap-10 p-5">
      <li
        v-for="skill in skills"
        :key="skill"
        class="flex items-center justify-center gap-3 py-3 px-8 border rounded-3xl text-lg text-white cursor-pointer transition-all duration-300 bg-gradient-to-r from-gray-700 to-gray-400 hover:from-gray-900 hover:to-gray-600"
      >
        {{ skill }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from "vue";

const skills = ref([
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJs",
  "BootstrapCSS",
  "Tailwindcss",
  "Git",
  "Github",
  "Java",
  "SQL",
  "NextJS",
  "NuxtJs",
  "VueJs",
]);
</script>

<style scoped>
ul {
  max-width: 1200px;
  margin: 0 auto;
}

li {
  min-width: 120px;
  text-align: center;
}
</style>

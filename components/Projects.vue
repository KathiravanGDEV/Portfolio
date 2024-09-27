<template>
  <section class="py-10 w-full mx-5 md:mx-10">
    <h2 class="text-4xl md:text-5xl font-bold text-center pb-10">Projects</h2>
    <ul
      class="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
    >
      <li
        v-for="project in projects"
        :key="project.title"
        class="flex justify-center items-center"
      >
        <a
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col w-80 h-80 p-6 justify-center items-center bg-black text-white rounded-lg shadow-lg bg-gradient-to-r from-gray-700 to-gray-300 hover:scale-105 transition-transform duration-300"
        >
          <p class="text-lg font-semibold mb-2">{{ project.title }}</p>
          <p class="text-center text-sm">{{ project.description }}</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    title: "To Do Web App",
    description: "A web application to manage your tasks.",
    link: "https://todo-web2.netlify.app/",
  },
  {
    title: "Login Page",
    description: "A simple login page using HTML and CSS.",
    link: "https://finlogin-form.netlify.app/",
  },
  {
    title: "Medium Web Clone",
    description: "A clone of the Medium website using modern web technologies.",
    link: "https://github.com/KathiravanGDEV/Medium-Blog-Web-Clone",
  },
]);
</script>

<style scoped>
ul {
  max-width: 1200px;
  margin: 0 auto;
}

a {
  text-align: center;
  min-height: 320px;
}

@media (max-width: 768px) {
  a {
    width: 90%;
  }
}
</style>

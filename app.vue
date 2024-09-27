<template>
  <div
    class="bg-black bg-gradient-to-br from-black to-gray-700 via-black scroll-smooth text-white"
  >
    <nav class="z-10 pb-16">
      <NavBar />
    </nav>

    <header
      class="text-center py-10 w-full h-96 flex flex-col justify-center bg-white bg-gradient-to-br from-white to-black via-gray-800"
    >
      <h1 class="text-5xl md:text-7xl font-bold animate-fade-in">
        👋 I'm Kathiravan G Dev
      </h1>
      <p class="mt-4 text-lg md:text-xl animate-fade-in-delay">
        Welcome to my personal portfolio website!...
      </p>
    </header>

    <main class="px-5 sm:px-10">
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>

    <footer class="w-full text-center py-5 bg-gray-800">
      <a href="/" class="text-white hover:underline">Made By Kathiravan G...</a>
    </footer>
  </div>
</template>

<script>
import AboutMe from "~/components/AboutMe.vue";
import Skills from "~/components/Skills.vue";
import Projects from "~/components/Projects.vue";
import Contact from "~/components/Contact.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    AboutMe,
    Skills,
    Projects,
    Contact,
  },
};
</script>

<style>
* {
  scrollbar-width: none;
  scroll-behavior: smooth;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  display: none;
}
</style>

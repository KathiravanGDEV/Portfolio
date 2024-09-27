<template>
  <section class="py-10 mx-5 md:mx-10 w-full text-center">
    <h2 class="text-4xl font-bold">Contact Info</h2>
    <div class="flex flex-wrap justify-center items-center gap-8 md:gap-10 p-5">
      <!-- Phone Icon -->
      <a
        href="tel:+916381013029"
        class="hover:scale-110 transition-transform duration-200"
      >
        <font-awesome :icon="faAddressBook" class="w-8 h-8" />
      </a>

      <!-- GitHub Icon -->
      <a
        href="https://github.com/KathiravanGDEV"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:scale-110 transition-transform duration-200"
      >
        <font-awesome :icon="faGithub" class="w-8 h-8" />
      </a>

      <!-- LeetCode Icon (conditionally rendered) -->
      <a
        v-if="hasLeetCodeIcon"
        href="https://leetcode.com/u/kathiravan_G-DEV/"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:scale-110 transition-transform duration-200"
      >
        <font-awesome :icon="['fab', 'leetcode']" class="w-8 h-8" />
      </a>

      <!-- LinkedIn Icon -->
      <a
        href="https://www.linkedin.com/in/kathiravan-g-dev/"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:scale-110 transition-transform duration-200"
      >
        <font-awesome :icon="['fab', 'linkedin']" class="w-8 h-8" />
      </a>

      <!-- Gmail Icon -->
      <a
        href="mailto:kathiravangdev@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:scale-110 transition-transform duration-200"
      >
        <font-awesome :icon="['fas', 'envelope']" class="w-8 h-8" />
      </a>
    </div>
  </section>
</template>

<script setup>
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Check if LeetCode icon is available
const hasLeetCodeIcon = false;

// Add icons to the library
library.add(faAddressBook, faGithub, faEnvelope, faLinkedin);
</script>

<style scoped>
a {
  transition: transform 0.3s ease-in-out;
}
</style>

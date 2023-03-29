<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="flex justify-center items-center h-screen flex-col">
    <button
      @click="toggleDark()"
      class="px-4 py-2 text-white bg-gray-600 dark:bg-purple-700"
    >
      Dark Toggle
    </button>
    <div class="mt-6">
      <a
        href="#"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Vue 3 dark Mode With Tailwind CSS
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          install & setup vue 3 dark mode in vue 3 using tailwind css 3
        </p>
      </a>
    </div>
  </div>
</template>
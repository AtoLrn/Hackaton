<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <button
      @click="toggleDark()"
      class="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-white py-2 px-4 dark:text-white dark:hover:text-gray-800 whitespace-nowrap"
    >
      Dark Toggle
    </button>
</template>
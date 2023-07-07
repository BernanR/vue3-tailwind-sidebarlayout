<template>
  <div class="flex h-screen">
    <div :class="sidebarClasses">
      <h2 class="text-xl font-bold">Sidebar</h2>
      <p>This is the sidebar content.</p>
    </div>
    <div class="ml-1/4" :class="contentClasses">
      <h2 class="text-xl font-bold">Main Content</h2>
      <p>This is the main content.</p>
    </div>
  </div>
  <button class="fixed top-5 right-5 py-2 px-4 bg-gray-500 text-white rounded" @click="toggleSidebar">
    {{ sidebarOpen ? 'Close Sidebar' : 'Open Sidebar' }}
  </button>
</template>

<script setup>
import { ref, computed } from 'vue';

const sidebarOpen = ref(true);

const sidebarClasses = computed(() => ({
  'w-1/4 bg-gray-200 transition-transform ease-in-out duration-300': true,
  'transform translate-x-0': sidebarOpen.value,
  'transform -translate-x-full': !sidebarOpen.value
}));

const contentClasses = computed(() => ({
  'flex-1 bg-white transition-margin ease-in-out duration-300': true,
  'ml-0': sidebarOpen.value,
  'ml-1/4': !sidebarOpen.value
}));

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}
</script>

<style scoped>
button {
  z-index: 999;
}
</style>

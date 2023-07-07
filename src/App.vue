<script setup>
import Menu from './Menu.vue';
import Content from './Content.vue'
import { inject, ref } from 'vue';
import NavBar from './NavBar.vue';

const sidebarOpen = ref(true)

const handleDiscloserButtonClick = (value) => {  
  sidebarOpen.value = value
};


</script>
<template>
  <div class="flex" :class="{'ico-mode' : !sidebarOpen }">
    <!--  -->
      <div  class="fixed transform duration-300 w-64 bg-stone-300 h-screen overflow-y-auto" 
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-[12rem]'"
      >
        <Menu :ico-mode="!sidebarOpen" />
      </div>
     
      <!--  -->
    <div class="flex-1 bg-stone-50 transition-margin ease-in-out duration-300" :class="sidebarOpen ? 'ml-[256px]' : 'ml-10'">
      <NavBar @open="handleDiscloserButtonClick"></NavBar>
      <div class="p-10">
        <Content/>
      </div>      
    </div>
  </div>
</template>

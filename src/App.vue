<script setup>
import SideBar from './components/SideBar.vue';
import { ref } from 'vue';
import TopNavBar from './components/TopNavBar.vue';

const sidebarOpen = ref(true)

const handleDiscloserButtonClick = (value) => {  
  sidebarOpen.value = value
};


</script>
<template>
  <div class="flex bg-stone-300" :class="{'ico-mode' : !sidebarOpen }">
    <!--  -->
    <SideBar class="block" :side-bar-open="sidebarOpen"></SideBar>
     
    <!-- No mobile o menu tipo icone deve ser ativado, mostra o mesmo menu no mobile -->
    <!--  -->
    <div class="flex-1 bg-stone-50 transition-margin ease-in-out duration-300" 
        :class="sidebarOpen ? 'md:ml-[256px] lg:ml-[256px] ml-[10rem]' : 'ml-0 lg:ml-[3.6rem] md:ml-[3.6rem]'"
    >
      <TopNavBar class="w-full fixed z-40" @open="handleDiscloserButtonClick"></TopNavBar>

      <section class="p-10">
        <router-view></router-view>
      </section>

    </div>
  </div>
</template>

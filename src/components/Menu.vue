<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    icoMode : {
        type: Boolean,
        required: true
    }
})

const isIconMode = computed(() => props.icoMode)

const menuItems = ref([
    { name: "Dashboard", icon: "business_chart-bar-32 mr-5", to: "dashboard"},
    { name: "Business", icon: "business_badge", to: "business"},
    { name: "Icons", icon: "ui-1_bell-53", to: "icons"},
    { name: "Team", icon: "users_single-02", to: "team"},
    { name: "Lab", icon: "education_atom", to: "lab"},
    { name: "Profile", icon: "users_circle-08", to: "profile"},
    { name: "Settings", icon: "loader_gear", to: "setting"},
])

</script>

<template>
    <div>
        <div class="flex h-[65.2px] px-2 border-b border-stone-400 flex-col justify-center" :class="isIconMode ? 'items-end' : 'items-center' ">
            <span v-if="isIconMode" class="text-3xl font-bold block p-4" >G</span>
            <span v-if="!isIconMode" class="text-xl font-bold text-stone-950">GeckoUrban</span>
        </div>

        <ul class="py-4 main-menu" :class="isIconMode ? 'flex flex-col items-end px-0' : 'md:px-2 lg:px-2'">
            <li v-for="item in menuItems" class=" text-stone-950 " >

                <router-link
                    :to="item.to"
                    active-class="text-stone-600 bg-stone-50"                    
                    class="
                    flex items-center 
                    mb-1 
                    py-2 
                    px-5 
                    md:py-4 
                    md:px-8 
                    lg:px-8 
                    text-md 
                    md:text-lg 
                    lg:text-lg"

                    :class="{
                    'md:rounded lg:rounded md:hover:bg-stone-600 md:hover:text-stone-50 lg:hover:bg-stone-600 lg:hover:text-stone-50' : !isIconMode,
                    'md:bg-stone-600 md:text-stone-100 lg:bg-stone-600 lg:text-stone-100 bg-stone-50' : (item.active && !isIconMode), 
                    '' : (item.active && isIconMode),
                    'w-0 md:pr-[4.5rem] lg:pr-[4.5rem] hover:text-stone-600 hover:bg-stone-50' : isIconMode
                }"
                    >
                    <i class="icon mr-5" :class="item.icon"></i>
                    <span v-if="!isIconMode">{{ item.to }}</span>
                  </router-link>
            </li>
           
        </ul>
    </div>
</template>
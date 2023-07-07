<script setup>
import { ref } from 'vue';

const props = defineProps({
    icoMode : {
        type: Boolean,
        required: true
    }
})

const menuItems = ref([
    { name: "Dashboard", icon: "business_chart-bar-32 mr-5", link: "", active: true},
    { name: "Business", icon: "business_badge", link: ""},
    { name: "Icons", icon: "ui-1_bell-53", link: ""},
    { name: "Team", icon: "users_single-02", link: ""},
    { name: "Lab", icon: "education_atom", link: ""},
    { name: "Profile", icon: "users_circle-08", link: ""},
    { name: "Settings", icon: "loader_gear", link: ""},
])

</script>

<template>
    <div>
        <div class="flex items-center h-[65.2px] px-2 border-b border-stone-400">
            <div class="px-8" :class="{'flex flex-col items-end': props.icoMode}">
                <span v-if="props.icoMode" class="icon-mode-show" >G</span>
                <span v-if="!props.icoMode" class="text-xl font-bold text-stone-950">GeckoUrban</span>
            </div>
        </div>

        <ul class="py-4 px-2" :class="{'flex flex-col items-end px-0': props.icoMode}">
            <li v-for="item in menuItems" class=" text-stone-950 " 
                :class="{
                    'rounded hover:bg-stone-600 hover:text-stone-50' : !props.icoMode,
                    'bg-stone-600 text-stone-50' : (item.active && !props.icoMode), 
                    'text-stone-600 bg-stone-50' : (item.active && props.icoMode),
                    'w-20 hover:text-stone-600 hover:bg-stone-50' : props.icoMode
                }"
            >
                <a class="flex items-center py-3 mb-1 px-8  text-lg" href="#arrows">
                    <i class="icon mr-5" :class="item.icon"></i>
                    <span v-if="!props.icoMode">{{ item.name }}</span>
                </a>
            </li>
           
        </ul>
    </div>
</template>
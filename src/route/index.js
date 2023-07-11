import { createRouter, createWebHistory } from "vue-router";
import Icons from "../Pages/Icons.vue";
import Profile from "../Pages/Profile.vue";
import Dashboard from "../Pages/Dashboard.vue";
import Business from "../Pages/Business.vue";


const routes = [
    // this is the default layou at the system, every layout inside children, will inherit this default layout
    {
      path: '/vue3-tailwind-sidebarlayout/',
      redirect: '/vue3-tailwind-sidebarlayout/dashboard'
    },{
      path: '/vue3-tailwind-sidebarlayout/icons',
      name: 'Icons',
      component: Icons,
    },
    {
      path: '/vue3-tailwind-sidebarlayout/profile',
      name: 'Profile',
      component: Profile,
    } ,
    {
      path: '/vue3-tailwind-sidebarlayout/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    } ,
    {
      path: '/vue3-tailwind-sidebarlayout/business',
      name: 'Business',
      component: Business,
    } 
];

const route = createRouter({
    history: createWebHistory(),
    routes
});

export default route;

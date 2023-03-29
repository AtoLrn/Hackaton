<script setup lang="ts">
    import IconHome from './icons/IconHome.vue';
    import IconCover from './icons/IconCover.vue';
    import IconHeart from './icons/IconHeart.vue';
    import IconNotification from './icons/IconNotification.vue';
    import IconSettings from './icons/IconSettings.vue';
    import ToggleDarkMode from './ToggleDarkMode.vue';

    import '../assets/sidebar.scss';
</script>

<template>  
    
<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 h-screen sidebar" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <RouterLink to="/" class="flex items-center pl-2.5 mb-5">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-7" alt="Jaji Logo" />
            <p class="self-center text-xl font-semibold whitespace-nowrap hidden item dark:text-white">Jaji</p>
        </RouterLink>
        <hr class="my-4 border-gray-200 dark:border-gray-700" />
      <ul class="space-y-2 font-medium">
         <li>
            <RouterLink to="/information-list" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconHome />
               <span class="flex-1 ml-3 whitespace-nowrap hidden item">Accueil</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/information-list" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconCover />
                <span class="flex-1 ml-3 whitespace-nowrap hidden item">Couverture</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/information-list" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconHeart />
                <span class="flex-1 ml-3 whitespace-nowrap hidden item">Soins</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/information-list" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconNotification />
                <span class="flex-1 ml-3 whitespace-nowrap hidden item">Actualités</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/information-list" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconSettings />
                <span class="flex-1 ml-3 whitespace-nowrap hidden item">Paramètres</span>
            </RouterLink>
         </li>
         <li class="hidden item">
            <ToggleDarkMode />
         </li>
      </ul>
   </div>
</aside>

</template>

<style lang="sass">
.sidebar
    width: 4rem
    transition: all 0.3s ease-in-out
.sidebar:hover
    width: 16rem
    transition: all 0.3s ease-in-out
    .item
        display: block
</style>

<script setup lang="ts">
    import IconHome from './icons/IconHome.vue';
    import IconCover from './icons/IconCover.vue';
    import IconHeart from './icons/IconHeart.vue';
    import IconNotification from './icons/IconNotification.vue';
    import IconSettings from './icons/IconSettings.vue';
    import IconProfil from './icons/IconProfil.vue';
    import Logo from './icons/Logo.vue';
    import LogoFull from './icons/LogoFull.vue';
    import IconLogout from './icons/IconLogout.vue';
    import ToggleDarkMode from './ToggleDarkMode.vue';
</script>

<template>

<aside v-if="$route.path !== '/connexion'" id="logo-sidebar" class="hidden top-0 left-0 z-40 h-screen sidebar sm:block fixed border-r-2 shadow-xl" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <RouterLink to="/" class="flex items-center pl-2.5 mb-5 logo">
            <Logo />
        </RouterLink>
        <RouterLink to="/" class="flex items-center pl-2.5 mb-5 logo-hovered">
            <LogoFull />
        </RouterLink>
        <hr class="my-4 border-gray-200 dark:border-gray-700" />
      <ul class="space-y-2 font-medium">
         <li>
            <RouterLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconHome />
               <span class="flex-1 ml-3 whitespace-nowrap hidden item">Accueil</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/couverture-sante" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconCover />
                <span class="flex-1 ml-3 whitespace-nowrap hidden item">Couverture</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/soins" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconHeart />
                <span class="flex-1 ml-3 whitespace-nowrap hidden item">Soins</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/actualites" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconNotification />
                <span class="flex-1 ml-3 whitespace-nowrap hidden item">Actualités</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/parametres" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconSettings />
                <span class="flex-1 ml-3 whitespace-nowrap hidden item">Paramètres</span>
            </RouterLink>
         </li>
      </ul>
      <!-- Icons on bottom -->
      <ul class="absolute bottom-0 z-40">
         <li class="hidden item">
            <ToggleDarkMode />
         </li>
         <li>
            <RouterLink to="/profil" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <IconProfil />
               <span class="flex-1 ml-3 whitespace-nowrap hidden item">Profil</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/connexion" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconLogout />
               <span class="flex-1 ml-3 whitespace-nowrap hidden item">Déconnexion</span>
            </RouterLink>
         </li>
      </ul>
   </div>
</aside>

<!-- Bottom Navbar on mobile -->
<nav class="fixed bottom-0 sm:hidden w-screen bg-white border-t border-gray-200 z-40 rounded-t-3xl flex justify-center align-middle">
      <ul class="font-medium flex">
         <li>
            <RouterLink to="/" class="flex flex-col my-2 justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconHome />
               <span class="whitespace-nowrap text-xs text-gray-600">Accueil</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/" class="flex flex-col my-2 justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconCover />
                <span class="whitespace-nowrap text-xs text-gray-600">Couverture</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/" class="flex flex-col my-2 justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconHeart />
                <span class="whitespace-nowrap text-xs text-gray-600">Soins</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/actualites" class="flex flex-col my-2 justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconNotification />
                <span class="whitespace-nowrap text-xs text-gray-600">Actualités</span>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/connexion" class="flex flex-col my-2 justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconProfil />
                <span class="whitespace-nowrap text-xs text-gray-600">Profil</span>
            </RouterLink>
         </li>
         <li class="hidden item">
            <ToggleDarkMode />
         </li>
      </ul>
</nav>

</template>

<style lang="sass">
.sidebar
    width: 4rem
    transition: width 0.2s ease-in-out
    .logo-hovered
         display: none
    .logo
         display: block
.sidebar:hover
    width: 16rem
    transition: width 0.3s ease-in-out
    .item
        display: block
    .logo-hovered
         display: block
    .logo
         display: none
</style>

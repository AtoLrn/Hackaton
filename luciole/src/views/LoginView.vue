<template>

  <div class="h-screen flex">
    <div class="w-2/3 flex justify-center items-center">
      <img src="/img/scene_employeur.svg" alt="Illustration page de connexion">
    </div>
    <div class="w-1/3 bg-gray-200 flex flex-col justify-center items-center">

        <div class="w-4/12 flex justify-center items-center">
          <img src="/img/jaji_logo.svg" alt="Illustration page de connexion">
        </div>
        <div class="flex flex-col w-80 items-center">
          <div class="py-8">
            <h1>Espace employeur</h1>
          </div>
          <div class="py-2 text-base text-center">
            <p>Renseignez vos identifiants pour vous connecter</p>
          </div>
          <form class="w-full">
            <div class="mb-4">
              <label for="email" class="text-xs">Adresse e-mail</label>
              <input type="email" id="email" name="email" class="border border-slate-200 rounded p-2 w-full">
            </div>
            <div class="mb-4">
              <label for="password" class="text-xs">Mot de passe</label>
              <input type="password" id="password" name="password" class="border-b p-2 w-full">
            </div>
            <div class="flex justify-start items-center">
              <RouterLink to="/">
                <button type="submit" class="text-white font-medium py-2 px-4 rounded-md">Connexion</button>
              </RouterLink>
            </div>
          </form>
        </div>
    </div>
  </div>

</template>

<style scoped>
  button {
    color: #355070 !important;
    background-color: #FFE7AA !important;
    border-color: #FFD466 !important;
    padding: 9.5px 14px !important;
    border-style: solid !important;
    border-width: 1px !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    box-shadow: 0px 2px 4px rgba(23, 43, 77, 0.15) !important;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out !important;
  }

  button:hover {
    background-color: #FFD466 !important;
    box-shadow: 0px 8px 12px rgba(23, 43, 77, 0.16) !important;
    cursor: pointer;
  }

</style>

<template>

  <div>
      <div class="w-4/12 bg-white shadow-md rounded-md m-auto p-4">
        <h2 class="text-lg font-medium text-gray-800 mb-4">Connexion</h2>
        <form>
          <div class="mb-4">
            <input type="email" id="email" name="email" class="border-b p-2 w-full" placeholder="Email" required>
          </div>
          <div class="mb-4">
            <input type="password" id="password" name="password" class="border-b p-2 w-full" placeholder="Mot de passe" required>
          </div>
          <div class="flex justify-end items-center">
            <button type="submit" class="text-white font-medium py-2 px-4 rounded-md">Connexion</button>
          </div>
        </form>
      </div>
  </div>

</template>

<style scoped>

input {
  border-bottom: 1px solid var(--vt-c-blue-mute);
  transition: border-bottom 0.2s ease-in-out;
}

input:focus, input:hover {
  border-bottom: 1px solid var(--vt-c-blue-soft);
}

button {
  background-color: var(--vt-c-blue);
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: var(--vt-c-blue-dark);
}


</style>

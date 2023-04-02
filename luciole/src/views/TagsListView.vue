<template>

  <div class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden" id="modal">
      <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <div class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

          <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8">
            <div class="mb-4">
              <label for="tag" class="block text-gray-700 font-bold mb-2">Tag :</label>
              <input type="text" id="tag" v-model="form.name" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="mb-4">
              <label for="date" class="block text-gray-700 font-bold mb-2">Date de début :</label>
              <input type="date" id="date" v-model="form.startDate" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="mb-6">
              <label for="enddate" class="block text-gray-700 font-bold mb-2">Date de fin :</label>
              <input type="date" id="enddate" v-model="form.endDate" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="flex items-center justify-end">
              <button type="button" class="custom-btn py-2 px-4 text-white rounded mr-2" @click="submitForm"><i class="fas fa-plus"></i> Créer</button>
              <button type="button" class="py-2 px-4 text-white rounded bg-gray-500 hover:bg-gray-600 mr-2 ease-in duration-300" @click="hideModal()"><i class="fas fa-times"></i> Annuler</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  <div class="py-2 m-10 lg:m-0 sm:px-2 md:px-8 lg:px-16 dark:bg-gray-800 overflow-x-scroll">
    <h1 class="my-10">Tous les tags</h1>
    <div class="my-4 text-right">
      <RouterLink :to="`/backoffice/posts`" class="custom-btn text-white font-semibold py-2 px-4 mr-2 rounded" style="background-color: #E67377">
        Voir les contenus
      </RouterLink>
      <RouterLink :to="``"  @click="toggleModal()" class="custom-btn text-white font-semibold py-2 px-4 rounded">
        Créer un tag
      </RouterLink>
    </div>
    <table class="custom-table w-full divide-y-8 divide-light">
      <thead>
      <tr>
        <th class="py-3 px-4 text-left font-bold">Nom</th>
        <th class="py-3 px-4 text-left font-bold">Date de début</th>
        <th class="py-3 px-4 text-left font-bold">Date de fin</th>
        <th class="py-3 px-4 text-left font-bold text-right">&nbsp;</th>
      </tr>
      </thead>
      <tbody class="divide-y-8 divide-light">
      <tr v-for="tag in tags" class="bg-white">
        <td class="py-2 px-4">{{ tag.name }}</td>
        <td class="py-2 px-4">{{ new Date(tag.startDate).toLocaleDateString('fr-FR') }}</td>
        <td class="py-2 px-4">{{ new Date(tag.endDate).toLocaleDateString('fr-FR') }}</td>
        <td class="py-2 px-4 flex flex-col justify-end">
          <button @click="removeTag(tag.id)" class="custom-table-btn ml-auto bg-red-500 w-28 bg-white text-red-500 border border-gray-200 font-bold py-2 px-4 rounded">Supprimer</button>
        </td>
      </tr>
      </tbody>
    </table>


  </div>

</template>


<script lang="ts">
export default {
  data() {
    return {
        form: {
            name: '',
            startDate: new Date(),
            endDate: new Date(),
            showModal: false,

        },
        tags: []
    };
  },
  beforeMount() {
    fetch("http://localhost:3000/api/tag")
    .then(res => res.json())
    .then(data => {
        this.tags = data.tags
    })
  },
  methods: {
    async removeTag(id) {
        fetch(`http://localhost:3000/api/tag/${id}`, {
            method: "DELETE"
        })
        .then(_ => {
            this.tags = this.tags.filter(tag => tag.id != id)
        })
    },
    //envois du formulaire pour créer un post
    async submitForm() {
      try {
        const formData = new FormData();
        console.log("voici le formulaire", this.form)
        formData.append('name', this.form.name);
        formData.append('startDate', this.form.startDate);
        formData.append('endDate', this.form.endDate);
        formData.append('weeks', null);

        const response = await fetch(`http://localhost:3000/api/tag`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify({
            name: this.form.name,
            startDate: this.form.startDate,
            endDate: this.form.endDate,
            weeks: null
          })
        });

        const data = await response.json()
        this.tags.push(data.tag)
      } catch (error) {
        console.error(error);
      }
    },
    toggleModal() {
      document.getElementById('modal').classList.toggle('hidden')
    },
    hideModal() {
      document.getElementById('modal').classList.add('hidden')
    }
  },
};
</script>

<style scoped>

</style>

<template>

  <div class="create py-2 m-10 lg:m-0 sm:px-2 md:px-8 lg:px-16 dark:bg-gray-800 overflow-x-scroll">
    <h1 class="my-10">Contenus en ligne</h1>
    <div class="my-4 text-right">
      <RouterLink :to="`/backoffice/tags`" class="custom-btn text-white font-semibold py-2 px-4 mr-2 rounded" style="background-color: #E67377">
        Voir les tags
      </RouterLink>
      <RouterLink :to="`/backoffice/post/create`" class="custom-btn text-white font-semibold py-2 px-4 rounded">
        Créer un contenu
      </RouterLink>
    </div>
    <table class="custom-table w-full divide-y-8 divide-light">
      <thead>
        <tr>
          <th class="py-3 px-4 text-left font-bold">Titre</th>
          <th class="py-3 px-4 text-left font-bold">Type de contenu</th>
          <th class="py-3 px-4 text-left font-bold">Tags associés</th>
          <th class="py-3 px-4 text-left font-bold">Date de publication</th>
          <th class="py-3 px-4 text-left font-bold text-right">&nbsp;</th>
        </tr>
      </thead>
      <tbody class="divide-y-8 divide-light">
        <tr v-for="post in posts" class="bg-white">
            <td class="py-2 px-4">{{ post.title }}</td>
            <td class="py-2 px-4">{{ post.type }}</td>
            <td class="py-2 px-4">{{ post.tags }}</td>
            <td class="py-2 px-4">{{ new Date(post.createdAt).toLocaleDateString('fr-FR') }}</td>
            <td class="py-2 px-4 flex flex-col justify-end">
              <RouterLink :to="`/backoffice/post/${post.id}`" class="custom-table-btn ml-auto text-center w-28 bg-blue-500 bg-white text-blue-400 border border-gray-200 font-bold py-2 px-4 rounded">
                Modifier
              </RouterLink>
              <button @click="removePost(post.id)" class="custom-table-btn ml-auto bg-red-500 w-28 bg-white text-red-500 border border-gray-200 font-bold py-2 px-4 rounded">Supprimer</button>
            </td>
        </tr>
      </tbody>
    </table>


  </div>


<!--  <div v-for="post in posts">
    <RouterLink :to="`/backoffice/post/${post.id}`">
        <p>titre: {{ post.title }}</p>
        <img :src="post.medias[0].path" v-if="post.medias.length"/>
    </RouterLink>
    <button @click="removePost(post.id)">Supprimer</button>
  </div>-->

</template>

<script lang="ts">
export default {
  data() {
    return {
      posts: [] as any
    }
  },
  beforeMount() {
    fetch("http://localhost:3000/api/post")
    .then(res => res.json())
    .then(data => {
        data.forEach(post => {
            post.medias.map(media => media.path = "http://localhost:3000/" + media.path)
        })

        this.posts = data
    })
  },
  methods: {
    removePost(id) {
        if(confirm("Voulez vous supprimer ce post ?")) {
            fetch(`http://localhost:3000/api/post/${id}`, {
                method: "DELETE"
            })
            .then(_ => {
                this.posts = this.posts.filter(post => post.id != id)
            })
        }
    }
  }
}
</script>

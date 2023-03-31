<template>

  <div class="container mx-24">
    <div>
      <RouterLink to="/actualites" class="text-2xl font-bold text-blue-500">Retour</RouterLink>
      <h1 class="text-4xl font-bold">{{title}}</h1>
      <!-- Post Content -->
      <div class="mt-8">
        <div class="flex flex-col">
          <div class="flex flex-col gap-2 max-w-7xl">
            <p class="text-md text-gray-500">Type de contenu : {{type}}</p>
            <div class="flex flex-col justify-center gap-2">
              <p class="text-xl">{{content}}</p>
            </div>
            <div class="flex flex-col justify-center gap-2">
            </div>
            <div class="flex flex-col justify-center gap-2" v-if="medias.length > 0">
              <p class="text-2xl font-bold">Medias</p>
              <div class="flex flex-col items-center justify-center gap-2">
                <img v-for="media in medias" :src="`http://localhost:3000/${media.path}`" />
              </div>
            </div>
          </div>
        </div>
      </div>
    <li v-for="media in medias">
        <img :src="`http://localhost:3000/${media.path}`" />
    </li>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "InformationView",
  data() {
    return {
        title: '',
        content: '',
        type: 'post',
        medias: [] as any,
    };
  },
  beforeMount() {
    const id = this.$route.params.id

    fetch(`http://localhost:3000/api/post/${id}`)
    .then(res => res.json())
    .then(data => {
        const {title, content, type, toPublishAt, medias} = data

        this.title = title
        this.content = content
        this.type = type

        this.medias = medias
    })
  },

}
</script>

<style scoped>

</style>

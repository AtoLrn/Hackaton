<template>
  <div class="create">
  <h1 class="mb-10">Créer un contenu</h1>
  <form @submit.prevent="submitForm">

    <div class="mb-8">
      <label class="custom-label block font-bold mb-2">Type de contenu</label>
      <div class="flex items-center">
        <label for="post" class="inline-flex items-center mr-8">
          <input type="radio" id="post" value="post" v-model="form.type" class="h-5 w-5">
          <span class="custom-radio ml-2">post</span>
        </label>
        <label for="link" class="inline-flex items-center mr-8">
          <input type="radio" id="link" value="link" v-model="form.type" class="h-5 w-5">
          <span class="custom-radio ml-2">link</span>
        </label>
        <label for="slide" class="inline-flex items-center mr-8">
          <input type="radio" id="slide" value="slide" v-model="form.type" class="h-5 w-5">
          <span class="custom-radio ml-2">slide</span>
        </label>
        <label for="video" class="inline-flex items-center">
          <input type="radio" id="video" value="video" v-model="form.type" class="h-5 w-5">
          <span class="custom-radio ml-2">video</span>
        </label>
      </div>
    </div>

    <div class="mb-8">
      <label for="title" class="custom-label block font-bold mb-2">Titre</label>
      <input id="title" type="text" class="custom-input w-4/12 border rounded-lg py-2 px-3 text-gray-700 leading-tight rounded-sm focus:outline-none focus:shadow-outline" placeholder="Footing, les bons conseils pour éviter les blessures">
    </div>

    <div class="mb-8">
      <label for="content" class="custom-label block font-bold mb-2">Corps</label>
      <textarea id="content" v-model="form.content" class="custom-input w-4/12 border rounded-lg py-2 px-3 text-gray-700 leading-tight rounded-sm focus:outline-none focus:shadow-outline" placeholder="Saisissez le corps du contenu" required></textarea>
    </div>

    <div class="mb-8">
      <label for="content" class="custom-label block font-bold mb-2">Source</label>
      <div class="flex items-center">
        <label for="radioJaji" class="inline-flex items-center mr-8">
          <input type="radio" id="radioJaji" value="jaji" name="radio-group" class="h-5 w-5" v-model="selectedSource">
          <span class="custom-radio ml-2">Jaji</span>
        </label>
        <label for="radioOther" class="inline-flex items-center">
          <input type="radio" id="radioOther" value="other" name="radio-group" class="h-5 w-5" v-model="selectedSource">
          <span class="custom-radio ml-2">Autre</span>
        </label>
        <div v-if="selectedSource === 'other'" class="ml-4 w-3/12">
          <input id="source" type="text" class="custom-input w-full border rounded-lg py-2 px-3 text-gray-700 rounded-sm focus:outline-none focus:shadow-outline" placeholder="Lien">
        </div>
      </div>
    </div>

    <div class="mb-8">
      <label class="custom-label block font-bold mb-2">Fichier</label>
      <label for="files" class="custom-label-file mb-2 text-white font-bold p-2 rounded-sm w-50">Choisir un fichier</label>
      <input type="file" ref="files" id="files" multiple="multiple" class="custom-input custom-file-upload w-4/12 border rounded-lg py-2 px-3 text-gray-700 leading-tight rounded-sm focus:outline-none focus:shadow-outline" @change="handleFileChange">
    </div>

    <div class="mb-8">
      <label for="date" class="custom-label block font-bold mb-2">Date de publication</label>
      <input type="date" id="date" v-model="form.toPublishAt" class="custom-input w-4/12 border py-2 px-3 text-gray-700 leading-tight rounded-sm focus:outline-none focus:shadow-outline" open="true">
    </div>

    <button type="submit" class="custom-btn font-bold text-white rounded-sm py-2 px-8">Enregistrer le nouveau contenu</button>

  </form>

  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      selectedSource: 'jaji',
      form: {
        title: '',
        content: '',
        toPublishAt: new Date(),
        files: null,
        type: 'post',
      },
    };
  },
  beforeMount() {
    fetch('http://localhost:3000/post')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(post => {
            const { title, content, createdAt, type, medias } = post

            // Url pour pouvoir accéder aux images
            medias.map(media => media.path = "http://localhost:3000/" + media.path)
            console.log(medias)
        })
    })
  },
  methods: {
    handleFileChange(event) {
      this.form.files = event.target.files;
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('title', this.form.title);
      formData.append('content', this.form.content);
      formData.append('toPublishAt', this.form.toPublishAt);
      formData.append('type', this.form.type);

      if(this.form.files) {
        for(let i=0; i < this.form.files.length; i++) {
          formData.append(`files`, this.form.files[i])
        }
      }

      try {
        const response = await fetch('http://localhost:3000/post', {
          method: 'POST',
          body: formData
        });

        alert('Post créé')

        this.form.title = ''
        this.form.content = ''
        const today = new Date()
        this.form.toPublishAt = today.toISOString().substring(0, 10)
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

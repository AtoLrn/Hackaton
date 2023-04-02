<template>
  <div class="create py-4 m-10 lg:m-0 sm:px-2 md:px-8 lg:px-16">
    <h1 class="mb-10">Créer un contenu</h1>
    <form @submit.prevent="submitForm">

      <div class="flex flex-col lg:flex-row">
        <div class="w-4/12">
          <div class="mb-8">
            <label class="custom-label block font-bold mb-2">Type de contenu</label>
            <div class="flex items-center">
              <label for="post" class="inline-flex items-center mr-8">
                <input type="radio" id="post" value="post" v-model="form.type" class="h-5 w-5">
                <span class="custom-radio ml-2">Article</span>
              </label>
              <label for="video" class="inline-flex items-center">
                <input type="radio" id="video" value="video" v-model="form.type" class="h-5 w-5">
                <span class="custom-radio ml-2">Vidéo</span>
              </label>
            </div>
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
            </div>
            <div class="mt-4 w-8/12">
              <input v-if="selectedSource === 'other'" id="source" type="text" class="custom-input w-full border rounded-lg py-2 px-3 text-gray-700 rounded-sm focus:outline-none focus:shadow-outline" placeholder="Lien">
            </div>
          </div>

          <div class="mb-8">
            <label class="custom-label block font-bold mb-2">Fichier(s)</label>
            <label for="files" class="custom-label-file mb-2 text-white font-bold p-2 rounded-sm w-50">Choisir un fichier</label>
            <input type="file" ref="files" id="files" multiple="multiple" class="custom-input custom-file-upload w-4/12 border rounded-lg py-2 px-3 text-gray-700 leading-tight rounded-sm focus:outline-none focus:shadow-outline" @change="handleFileChange">
            <br>
            <p class="mt-4 text-xs">Le premier fichier sélectionné fera office de vignette</p>
          </div>

          <div class="mb-8">
            <label for="date" class="custom-label block font-bold mb-2">Date de publication</label>
            <!--
                  <input type="date" id="date" v-model="form.toPublishAt" class="custom-input w-4/12 border py-2 px-3 text-gray-700 leading-tight rounded-sm focus:outline-none focus:shadow-outline" open="true">
            -->
            <div id="calendar"></div>
          </div>
        </div>
        <div class="w-8/12">
          <div class="mb-8">
            <label for="title" class="custom-label block font-bold mb-2">Titre</label>
            <input id="title" v-model="form.title" name="title" type="text" class="custom-input w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight rounded-sm focus:outline-none focus:shadow-outline" placeholder="Footing, les bons conseils pour éviter les blessures">
          </div>
          <div class="mb-8">
            <label for="content" class="custom-label block font-bold mb-2">Corps</label>
            <!--
                  <textarea id="content" v-model="form.content" class="custom-input w-4/12 border rounded-lg py-2 px-3 text-gray-700 leading-tight rounded-sm focus:outline-none focus:shadow-outline" placeholder="Saisissez le corps du contenu" required></textarea>
            -->
            <div id="editor-js" class="bg-white"></div>
          </div>
          <div class="mb-8">
            <label for="accessibility" class="custom-label block font-bold mb-2">Accessibilité</label>
            <input id="accessibility" name="accessibility" type="text" class="custom-input w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight rounded-sm focus:outline-none focus:shadow-outline" placeholder="Saisissez une courte description des images">
          </div>
          <div class="flex justify-end">
            <button type="submit" class="custom-btn font-bold text-white rounded-sm py-2 px-8 mt-8">Enregistrer le nouveau contenu</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>

  @import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';

  #editor-js {
    height: 32vh;
  }

</style>

<script lang="ts">

import Quill from 'quill'
import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';
import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';
import '@uvarov.frontend/vanilla-calendar/build/themes/light.min.css';

const toolBarOptions =  [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],

  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];


export default {
  data() {
    return {
      selectedSource: 'jaji',
      form: {
        title: '',
        content: '',
        toPublishAt: new Date() as any,
        files: null as any,
        type: 'post',
        quill: null
      },
    };
  },
  beforeMount() {
    fetch('http://localhost:3000/api/post')
    .then(res => res.json())
    .then(data => {
        data.forEach(post => {
            const { title, content, createdAt, type, medias } = post

            // Url pour pouvoir accéder aux images
            medias.map(media => media.path = "http://localhost:3000/" + media.path)
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
      formData.append('content', this.form.quill.getText());
      formData.append('toPublishAt', this.form.toPublishAt);
      formData.append('type', this.form.type);

      if(this.form.files) {
        for(let i=0; i < this.form.files.length; i++) {
          formData.append(`files`, this.form.files[i])
        }
      }

      try {
        const response = await fetch('http://localhost:3000/api/post', {
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
  mounted() {
    const options = {
      modules: {
        toolbar: toolBarOptions
      },
      placeholder: 'Saisissez le contenu de votre article, ou une description à propos de votre vidéo...',
      theme: 'snow'
    };
    //new Quill('#editor-js', options);
    this.form.quill = new Quill('#editor-js', options);

    const calendar = new VanillaCalendar('#calendar', {
      settings: {
        lang: 'fr',
        visibility: {
          theme: 'light',
          weekend: false,
          today: false,
        },
      }});
    calendar.init();
  }
};
</script>

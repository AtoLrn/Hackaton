<template>
  <div class="greetings">
  <h1>créer un Post</h1>
  <form @submit.prevent="submitForm">
    <label for="title">Titre :</label>
    <input type="text" id="title" v-model="form.title" required>

    <label for="content">Contenu :</label>
    <textarea id="content" v-model="form.content" required></textarea>

    <label for="date">Date de publication :</label>
    <input type="date" id="date" v-model="form.toPublishAt">

    <label for="file">Fichier :</label>
    <input type="file" ref="files" id="files" multiple="multiple" @change="handleFileChange">

    <br>
    <input type="radio" id="post" value="post" v-model="form.type">
    <label for="post">post</label>
    <br>
    <input type="radio" id="link" value="link" v-model="form.type">
    <label for="link">link</label>
    <br>
    <input type="radio" id="slide" value="slide" v-model="form.type">
    <label for="slide">slide</label>
    <br>
    <input type="radio" id="video" value="video" v-model="form.type">
    <label for="video">video</label>
    <br>

    <li v-for="media in form.medias">
        <p>Lien du media : {{ media.path }}</p>
        <button @click="removeMedia(media.id)">Supprimer</button>
    </li>


    <button type="submit">Soumettre</button>
  </form>

  <h1>Recupérer les postes</h1>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      form: {
        title: '',
        content: '',
        toPublishAt: '',
        files: null,
        type: 'post',
        medias: [],
      },
    };
  },
  beforeMount() {
    // récupérer tous les posts qui intéressent l'utilisateur
    fetch('http://localhost:3000/post/3')
    .then(res => res.json())
    .then(data => {
        const {title, content, type, toPublishAt, medias} = data

        this.form.title = title
        this.form.content = content
        this.form.type = type

        const dateBuffer = new Date(toPublishAt)
        const publishDate = dateBuffer.toISOString().substring(0, 10)
        this.form.toPublishAt = publishDate
        this.form.medias = medias

    })
  },
  methods: {
    handleFileChange(event) {
      this.form.files = event.target.files;
    },
    async removeMedia(id) {
        fetch(`http://localhost:3000/media/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    },
    //envois du formulaire pour créer un post
    async submitForm() {
      const formData = new FormData();
      formData.append('title', this.form.title);
      formData.append('content', this.form.content);
      formData.append('toPublishAt', this.form.toPublishAt);
      formData.append('type', this.form.type);

      for(let i=0; i < this.form.files.length; i++) {
        formData.append(`files`, this.form.files[i])
      }

      try {
        const response = await fetch('http://localhost:3000/post', {
          method: 'POST',
          body: formData
        });

        console.log(response)
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

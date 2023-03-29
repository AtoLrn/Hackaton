<template>
  <div class="greetings">
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


    <button type="submit">Soumettre</button>
  </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      form: {
        title: '',
        content: '',
        toPublishAt: new Date(),
        files: null,
        type: 'post',
      },
    };
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

      for(let i=0; i < this.form.files.length; i++) {
        formData.append(`files`, this.form.files[i])
      }
      console.log(formData)

      try {
        const response = await fetch('http://localhost:3000/post', {
          method: 'POST',
          body: formData
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

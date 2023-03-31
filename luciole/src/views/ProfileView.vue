<script setup lang="ts">
  import TestApi from '../components/TestApi.vue'
</script>

<template>

  <div>
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-4xl font-bold">ProfileView</h1>
      <form @submit.prevent="submitForm">

      <label for="file">Fichier :</label>
      <input type="file" ref="files" id="files" @change="handleFileChange">

      <br>
      <button type="submit">Soumettre</button>
      </form>
    </div>
  </div>

</template>

<script lang="ts">
export default {
  data() {
    return {
      form: {
        files: null,
      },
    };
  },
  methods: {
    handleFileChange(event: any) {
      this.form.files = event.target.files;
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('file', this.form.type);

      try {
        const response = await fetch('http://localhost:3000/document', {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        console.log(response)
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
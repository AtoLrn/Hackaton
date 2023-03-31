<template>
  <div>
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-4xl font-bold">ProfileView</h1>
      <form @submit.prevent="submitForm" class="flex flex-col items-center mt-8">
        <div class="border border-gray-300 rounded-md p-12 flex flex-col items-center shadow-lg gap-2">
          <input type="file" @change="handleFileChange" />
          <button type="submit" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      form: {
        file: null as any,
      },
    };
  },
  methods: {
    handleFileChange(event: any) {
      this.form.file = event.target.file;
    },
    async submitForm(event: any) {
      const formData = new FormData();
      formData.append('file', event.target.file.files[0]);

      const userId = localStorage.getItem('userId');
      if (userId) {
        try {
          const response = await fetch('http://localhost:3000/api/document', {
            method: 'POST',
            body: formData,
            headers: {
              "LUCIOLE-USER-ID": userId,
            },
          });

          console.log(response)
        } catch (error: any) {
          console.error(error);
        }
      } else {
        console.error("User ID not found in local storage.");
      }
    },

  },
};
</script>

<template>
  <Layout>
    <div class="greetings">
    <h1>Tags</h1>

    <form @submit.prevent="submitForm">
        <label for="tag">Tag :</label>
        <input type="text" id="tag" v-model="form.name" required>

        <label for="date">Date de début:</label>
        <input type="date" id="date" v-model="form.startDate">

        <label for="enddate">Date de fin:</label>
        <input type="date" id="enddate" v-model="form.endDate">

        <button type="submit">Soumettre</button>
    </form>
    <h3 class="text-2xl font-bold my-8">Liste des tags</h3>
        <div id="tags-list" class="col-span-12 sm:col-span-8 overflow-x-scroll">
          <ul class="flex gap-2 p-2 overflow-x-scroll flex-col" v-if="tags.length > 0">
            <li v-for="tag in tags" :key="tag.id">
              <div class="flex gap-2">
                <div class="tag px-4 text-center py-2 bg-gray-200 rounded-3xl">
                <a href="#">{{ tag.name }}</a>
              </div>
              <button @click="removeTag(tag.id)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Supprimer</button>
              </div>
              <hr class="border-1 border-gray-400 my-4">
            </li>
          </ul>
        </div>
  </div>
  </Layout>
</template>


<script lang="ts">
import Layout from '../components/Layout.vue';

export default {
    data() {
        return {
            form: {
                name: "",
                startDate: new Date(),
                endDate: new Date(),
            },
            tags: []
        };
    },
    beforeMount() {
        fetch("http://localhost:3000/api/tag")
            .then(res => res.json())
            .then(data => {
            this.tags = data.tags;
        });
    },
    methods: {
        async removeTag(id) {
            fetch(`http://localhost:3000/api/tag/${id}`, {
                method: "DELETE"
            })
                .then(_ => {
                this.tags = this.tags.filter(tag => tag.id != id);
            });
        },
        //envois du formulaire pour créer un post
        async submitForm() {
            try {
                const formData = new FormData();
                console.log("voici le formulaire", this.form);
                formData.append("name", this.form.name);
                formData.append("startDate", this.form.startDate);
                formData.append("endDate", this.form.endDate);
                formData.append("weeks", null);
                const response = await fetch(`http://localhost:3000/api/tag`, {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: this.form.name,
                        startDate: this.form.startDate,
                        endDate: this.form.endDate,
                        weeks: null
                    })
                });
                const data = await response.json();
                this.tags.push(data.tag);
            }
            catch (error) {
                console.error(error);
            }
        },
    },
    components: { Layout }
};
</script>

<template>
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

    <li v-for="tag in tags">
        <p>{{tag.name}}</p>
        <button @click="removeTag(tag.id)">Supprimer</button>
    </li>
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
        },
        tags: []
    };
  },
  beforeMount() {
    fetch("http://localhost:3000/tag")
    .then(res => res.json())
    .then(data => {
        this.tags = data.tags
    })
  },
  methods: {
    async removeTag(id) {
        fetch(`http://localhost:3000/tag/${id}`, {
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

        const response = await fetch(`http://localhost:3000/tag`, {
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
  },
};
</script>

<template>

  <div v-for="post in posts">
    <RouterLink :to="`/backoffice/post/${post.id}`">
        <p>titre: {{ post.title }}</p>
        <img :src="post.medias[0].path" v-if="post.medias.length"/>
    </RouterLink>
    <button @click="removePost(post.id)">Supprimer</button>
  </div>

</template>

<script lang="ts">
export default {
  data() {
    return {
      posts: []
    }
  },
  beforeMount() {
    fetch("http://localhost:3000/post")
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
            fetch(`http://localhost:3000/post/${id}`, {
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

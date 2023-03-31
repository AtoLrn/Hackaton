<template>

  <div>
    <div>
      <h1 class="text-4xl font-bold">Post</h1>
      <p>Title: {{title}}</p>
      <p>Content: {{content}}</p>
      <p>type: {{type}}</p>
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

    fetch(`http://localhost:3000/post/${id}`)
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

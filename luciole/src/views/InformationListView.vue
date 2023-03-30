<template>

  <div class="sm:px-2 md:px-8 lg:px-16">
    <div class="grid grid-cols-12">
      <TagsList :tags="tags" />
      <div class="col-span-12 sm:col-span-4 flex items-center justify-center">
        <input type="text" placeholder="Rechercher" class="px-4 py-2 rounded-sm border border-gray-400 focus:outline-none focus:border-transparent">
      </div>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-flow-row gap-16">

      <PostsList :posts="posts" />

    </div>
  </div>
</template>

<script>

import PostsList from "@/components/PostsList.vue";
import TagsList from "@/components/TagsList.vue";

export default {

  components: {PostsList, TagsList},

  data() {
    return {
      tags: [
        {
          id: 1,
          name: "Tous"
        },
        {
          id: 2,
          name: "Tag 1"
        },
        {
          id: 3,
          name: "Tag 2"
        },
        {
          id: 4,
          name: "Tag 3"
        },
        {
          id: 5,
          name: "Tag 4"
        },
        {
          id: 6,
          name: "Tag 5"
        },
        {
          id: 7,
          name: "Tag 6"
        },
        {
          id: 8,
          name: "Tag 7"
        },
        {
          id: 9,
          name: "Tag 8"
        },
        {
          id: 10,
          name: "Tag 9"
        },
        {
          id: 11,
          name: "Tag 10"
        },
      ],
      posts: [
        {
          id: 1,
          type: "Article long",
          title: "Télétravail, les 5 meilleurs conseils pour rester concentré",
          source: "Sante.com",
          date: "28 mars 2023",
          content: "hihihi je suis un super contenu intéressant d'un article vraiment très chouette"
        },
        {
          id: 2,
          type: "Article court",
          title: "Télétravail, les 5 meilleurs conseils pour rester concentré",
          source: "Sante.com",
          date: "28 mars 2023",
          content: "hihihi je suis un super contenu intéressant d'un article vraiment très chouette"
        },
        {
          id: 3,
          type: "Article long",
          title: "Télétravail, les 5 meilleurs conseils pour rester concentré",
          source: "Sante.com",
          date: "28 mars 2023",
          content: "hihihi je suis un super contenu intéressant d'un article vraiment très chouette"
        },
        {
          id: 4,
          type: "Article court",
          title: "Télétravail, les 5 meilleurs conseils pour rester concentré",
          source: "Sante.com",
          date: "28 mars 2023",
          content: "hihihi je suis un super contenu intéressant d'un article vraiment très chouette"
        },
        {
          id: 5,
          type: "Article long",
          title: "Télétravail, les 5 meilleurs conseils pour rester concentré",
          source: "Sante.com",
          date: "28 mars 2023",
          content: "hihihi je suis un super contenu intéressant d'un article vraiment très chouette"
        },
        {
          id: 6,
          type: "Article court",
          title: "Télétravail, les 5 meilleurs conseils pour rester concentré",
          source: "Sante.com",
          date: "28 mars 2023",
          content: "hihihi je suis un super contenu intéressant d'un article vraiment très chouette"
        },
        {
          id: 7,
          type: "Article court",
          title: "Télétravail, les 5 meilleurs conseils pour rester concentré",
          source: "Sante.com",
          date: "28 mars 2023",
          content: "hihihi je suis un super contenu intéressant d'un article vraiment très chouette"
        },
        {
          id: 8,
          type: "Article long",
          title: "Télétravail, les 5 meilleurs conseils pour rester concentré",
          source: "Sante.com",
          date: "28 mars 2023",
          content: "hihihi je suis un super contenu intéressant d'un article vraiment très chouette"
        },
        {
          id: 9,
          type: "Article long",
          title: "Télétravail, les 5 meilleurs conseils pour rester concentré",
          source: "Sante.com",
          date: "28 mars 2023",
          content: "hihihi je suis un super contenu intéressant d'un article vraiment très chouette"
        },
      ]
    }
  }

}


</script>

<style scoped>



</style>

<template>

  <div class="sm:px-2 md:px-8 lg:px-16">
    <div class="grid grid-cols-12">
      <TagsList :tags="tags" />
      <div class="col-span-12 sm:col-span-4 flex items-center justify-center">
        <input type="text" placeholder="Rechercher" class="px-4 py-2 rounded-sm border border-gray-400 focus:outline-none focus:border-transparent">
      </div>
    </div>
    <div class="flex justify-between pt-2 pb-8">
      <div>
        <button class="flex items-center px-4 py-2 bg-gray-200 rounded-sm border border-gray-300 focus:outline-none">
          Contenu sauvegardé &nbsp;
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_4041_7102" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="1" width="16" height="14">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66669 2.66668C2.48988 2.66668 2.32031 2.73691 2.19528 2.86194C2.07026 2.98696 2.00002 3.15653 2.00002 3.33334V12.6667C2.00002 12.8435 2.07026 13.0131 2.19528 13.1381C2.32031 13.2631 2.48988 13.3333 2.66669 13.3333H13.3334C13.5102 13.3333 13.6797 13.2631 13.8048 13.1381C13.9298 13.0131 14 12.8435 14 12.6667V5.33334C14 5.15653 13.9298 4.98696 13.8048 4.86194C13.6797 4.73691 13.5102 4.66668 13.3334 4.66668H7.33335C7.11045 4.66668 6.9023 4.55528 6.77865 4.36981L5.64323 2.66668H2.66669ZM1.25247 1.91913C1.62755 1.54406 2.13625 1.33334 2.66669 1.33334H6.00002C6.22292 1.33334 6.43108 1.44474 6.55472 1.63021L7.69014 3.33334H13.3334C13.8638 3.33334 14.3725 3.54406 14.7476 3.91913C15.1226 4.2942 15.3334 4.80291 15.3334 5.33334V12.6667C15.3334 13.1971 15.1226 13.7058 14.7476 14.0809C14.3725 14.456 13.8638 14.6667 13.3334 14.6667H2.66669C2.13625 14.6667 1.62755 14.456 1.25247 14.0809C0.877401 13.7058 0.666687 13.1971 0.666687 12.6667V3.33334C0.666687 2.80291 0.877401 2.2942 1.25247 1.91913Z" fill="#1F2F42"/>
            </mask>
            <g mask="url(#mask0_4041_7102)">
              <rect width="16" height="16" fill="#8696A9"/>
            </g>
          </svg>
        </button>
      </div>
      <div>
        <button class="flex items-center px-4 py-2 bg-white rounded-sm border border-gray-300 focus:outline-none">
          Filtres &nbsp;
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_4041_7106" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="1" width="16" height="14">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.728556 1.71943C0.837795 1.48398 1.07375 1.33334 1.3333 1.33334H14.6666C14.9262 1.33334 15.1621 1.48398 15.2714 1.71943C15.3806 1.95487 15.3433 2.23231 15.1757 2.43049L9.99997 8.55078V14C9.99997 14.2311 9.88033 14.4456 9.68379 14.5671C9.48724 14.6886 9.24182 14.6996 9.03516 14.5963L6.36849 13.263C6.14264 13.15 5.99997 12.9192 5.99997 12.6667V8.55078L0.824255 2.43049C0.656657 2.23231 0.619318 1.95487 0.728556 1.71943ZM2.77017 2.66668L7.17568 7.87619C7.27746 7.99654 7.3333 8.14906 7.3333 8.30668V12.2547L8.66664 12.9213V8.30668C8.66664 8.14906 8.72248 7.99654 8.82425 7.87619L13.2298 2.66668H2.77017Z" fill="#1F2F42"/>
            </mask>
            <g mask="url(#mask0_4041_7106)">
              <rect width="16" height="16" fill="#8696A9"/>
            </g>
          </svg>
        </button>
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

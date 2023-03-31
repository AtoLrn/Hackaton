<template>

  <div id="tags-list" class="col-span-12 sm:col-span-8 overflow-x-scroll">
    <ul class="flex gap-2 p-2 overflow-x-scroll">
      <li v-for="tag in tags" :key="tag.id" class="tag px-4 text-center py-2 bg-gray-200 rounded-3xl">
        <a href="#">{{ tag.name }}</a>
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.tag {

  background-color: var(--background-color-tag);
  border: var(--border-tag);
  box-shadow: var(--box-shadow-tag);
  color: var(--text-color-tag);
  min-width: 100px;

  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: var(--box-shadow-tag-hover);
  }

  &.tag-active,
  &.tag:active {
    background-color: var(--background-color-tag-active);
    border: var(--border-tag-active);
    box-shadow: none;
    color: var(--text-color-tag-active);
  }

}
</style>

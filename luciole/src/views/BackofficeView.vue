<template>

  <div>
    <div class="flex flex-col pt-16 mb-16 h-screen">
      <h1 class="text-4xl font-bold">Modification de contenu</h1>
      <h1 class="text-3xl font-normal pt-16">Titre</h1>
      <input type="text" />
      <h1 class="text-3xl font-normal pt-16">Contenu</h1>
      <div class="inline pt-8">
          <div id="editor-js"></div>
      </div>
      <h1 class="text-3xl font-normal pt-16">Image de couverture</h1>
      <img class="pt-4" src="https://media.istockphoto.com/id/1249336570/fr/photo/femme-courant-dehors.jpg?s=612x612&w=0&k=20&c=gU_dAlcqO1r9hVapy6NhDfIr0XsK4rJ91pt0nw2TVjc=" width="200"/>
      <h1 class="text-3xl font-normal pt-16">Source du contenu</h1>
      <div class="flex align-center gap-5 pt-4">
        <div>
          <input type="radio">
          <span class="text-xl pl-4">Jaji</span>
        </div>

        <div>
          <input type="radio">
          <span class="text-xl pl-4">Autre</span>
        </div>
        <input type="text">
      </div>
      <h1 class="text-3xl font-normal pt-16">Planification du contenu</h1>
      <div class="inline pt-8">
        <div id="calendar"></div>
      </div>

      <h1 class="text-3xl font-normal pt-16">Tag associes a ce contenu</h1>
      <h1 class="text-3xl font-normal pt-16">Type du contenu</h1>
      <div class="flex align-center gap-5 pt-4">
        <div>
          <input type="radio">
          <span class="text-xl pl-4">Article</span>
        </div>

        <div>
          <input type="radio">
          <span class="text-xl pl-4">Video</span>
        </div>
        <input type="text">
      </div>

    </div>
  </div>

</template>

<style>
@import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';


#editor-js {
  height: 375px;
}
</style>

<script>
import Quill from 'quill'
import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';
import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';
import '@uvarov.frontend/vanilla-calendar/build/themes/light.min.css';

const toolBarOptions =  [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],

  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

export default {
  

  data() {
    return {
      editor: null,
      content: '<p>A Vue.js wrapper component for tiptap to use <code>v-model</code>.</p>',
    }
  },
  
  mounted() {
    const options = {
      modules: {
        toolbar: toolBarOptions
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    };
    new Quill('#editor-js', options);  

    const calendar = new VanillaCalendar('#calendar', { settings: {
      visibility: {
			theme: 'light',
		},
    }});
    calendar.init();
  }
}
</script>

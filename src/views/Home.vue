<script setup>
import { ref } from 'vue'
import Posts from '../components/Posts.vue'
import Comments from '../components/Comments.vue'
import Albums from '../components/Albums.vue'
import Photos from '../components/Photos.vue'
import Todos from '../components/Todos.vue'

const showPosts = ref(false)
const showComments = ref(false)
const showAlbums = ref(false)
const showPhotos = ref(false)
const showTodos = ref(false)

</script>

<template>
  <div>
    <h1>Home Page</h1>

    <button 
      @click="showPosts = true"
      class="text-blue-500 underline"
    >
      View Posts
    </button>
    <button 
      @click="showComments = true"
      class="text-blue-500 underline"
    >
      View Comments
    </button>
    <button 
      @click="showAlbums = true"
      class="text-blue-500 underline"
    >
      View Albums
    </button>
    <button 
      @click="showPhotos = true"
      class="text-blue-500 underline"
    >
      View Photos
    </button>
    <button 
      @click="showTodos = true"
      class="text-blue-500 underline"
    >
      View Todos
    </button>

    <!-- Show component when clicked -->
    <div v-if="showPosts">
      <Posts />
    </div>
    <div v-if="showComments">
      <Comments />
    </div>
    <div v-if="showAlbums">
      <Albums />
    </div>
    <div v-if="showTodos">
      <Todos />
    </div>
    <div v-if="showPhotos">
      <Photos />
    </div>

  </div>
</template>
<script setup>
import { ref, onMounted } from "vue"

const posts = ref([])
const loading = ref(true)

const fetchAll= (async () => {
  loading.value= true;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  posts.value = await res.json()
  loading.value = false
})
onMounted(() => {
  fetchAll();
})
</script>

<template>
  <div>
    <h2 class="m-10 font-semibold ">Latest Posts</h2>

    <p v-if="loading">Loading...</p>

    <div  
      v-for="post in posts" 
      :key="post.id" 
      class="m-10 p-4 border border-gray-300 rounded-lg shadow-md"
    >
      <h3 class="">{{ post.title }}</h3>
      <p class="">{{ post.body }}</p>
    </div>
  </div>
</template>

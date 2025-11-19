<script setup>
import { ref, onMounted } from "vue"

const posts = ref([])
const loading = ref(true)

onMounted(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  posts.value = await res.json()
  loading.value = false
})
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Latest Posts</h2>

    <p v-if="loading">Loading...</p>

    <div 
      v-for="post in posts" 
      :key="post.id" 
      class="p-4 mb-4 border rounded-lg shadow-sm"
    >
      <h3 class="text-xl font-semibold">{{ post.title }}</h3>
      <p class="text-gray-600">{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const comments = ref([])
const loading = ref(true)

onMounted(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments")
  comments.value = await res.json()
  loading.value = false
})
</script>

<template>
  <div>
    <h2 class="m-10 font-semibold">Latest Comments</h2>

    <p v-if="loading">Loading...</p>

    <div 
      v-for="comment in comments" 
      :key="comment.id" 
      class="m-10 p-4 border border-gray-300 rounded-lg shadow-md"
    >
      <h3 class="text-xl font-semibold">{{ comment.title }}</h3>
      <p class="text-gray-600">{{ comment.body }}</p>
    </div>
  </div>
</template>
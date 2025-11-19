<script setup>
import { ref, onMounted } from "vue"

const albums = ref([])
const loading = ref(true)

onMounted(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums")
  albums.value = await res.json()
  loading.value = false
})
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Latest Albums</h2>

    <p v-if="loading">Loading...</p>

    <div 
      v-for="album in albums" 
      :key="album.id" 
      class="p-4 mb-4 border rounded-lg shadow-sm"
    >
      <h3 class="text-xl font-semibold">{{ album.title }}</h3>
      <p class="text-gray-600">{{ album.body }}</p>
    </div>
  </div>
</template>
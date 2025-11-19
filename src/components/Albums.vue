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
    <h2 class="m-10 font-semibold">Latest Albums</h2>

    <p v-if="loading">Loading...</p>

    <div 
      v-for="album in albums" 
      :key="album.id" 
      class="m-10 p-4 border border-gray-300 rounded-lg shadow-md"
    >
      <h3 class="">{{ album.title }}</h3>
      <p class="">{{ album.body }}</p>
    </div>
  </div>
</template>
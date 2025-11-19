<script setup>
import { ref, onMounted } from "vue"

const photos = ref([])
const loading = ref(true)

onMounted(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos")
  photos.value = await res.json()
  loading.value = false
})
</script>

<template>
  <div>
    <h2 class="m-10 font-semibold">Latest Photos</h2>

    <p v-if="loading">Loading...</p>

    <div 
      v-for="photo in photos" 
      :key="photo.id" 
      class="m-10 p-4 border border-gray-300 rounded-lg shadow-md"
    >
      <h3 class="">{{ photo.title }}</h3>
      <p class="">{{ photo.body }}</p>
    </div>
  </div>
</template>
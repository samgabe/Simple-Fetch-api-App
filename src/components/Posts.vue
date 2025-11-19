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
    <h2 class="m-10 font-semibold text-2xl">Latest Posts</h2>

    <p v-if="loading" class="m-10 text-gray-600">Loading...</p>

    <div v-if="!loading" class="m-10 overflow-x-auto">
      <table class="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
        <thead class="bg-blue-500 text-white">
          <tr>
            <th class="border border-gray-300 p-3 text-left">ID</th>
            <th class="border border-gray-300 p-3 text-left">Title</th>
            <th class="border border-gray-300 p-3 text-left">Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id" class="hover:bg-gray-100 transition">
            <td class="border border-gray-300 p-3">{{ post.id }}</td>
            <td class="border border-gray-300 p-3 font-semibold">{{ post.title }}</td>
            <td class="border border-gray-300 p-3">{{ post.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue"

const todos = ref([])
const loading = ref(true)

onMounted(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  todos.value = await res.json()
  loading.value = false
})
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Latest Todos</h2>

    <p v-if="loading">Loading...</p>

    <div 
      v-for="todo in todos" 
      :key="todo.id" 
      class="p-4 mb-4 border rounded-lg shadow-sm"
    >
      <h3 class="text-xl font-semibold">{{ todo.title }}</h3>
      <p class="text-gray-600">{{ todo.body }}</p>
    </div>
  </div>
</template>
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
    <h2 class="m-10 font-semibold">Latest Todos</h2>

    <p v-if="loading">Loading...</p>

    <div 
      v-for="todo in todos" 
      :key="todo.id" 
      class="m-10 p-4 border border-gray-300 rounded-lg shadow-md"
    >
      <h3 class="">{{ todo.title }}</h3>
      <p class="">{{ todo.body }}</p>
    </div>
  </div>
</template>
<template>
  <div class="bg-gray-200 p-4 rounded-lg m-4">
    <h2>The Put Data Form</h2>

    <form @submit.prevent="submitForm">
      <label>
        Name:
        <input v-model="name" class="bg-white m-4" type="text" placeholder="Enter Any Name" />
      </label>
      <br />
      <label>
        Job:
        <input v-model="job" class="bg-white m-4 ml-8" type="text" placeholder="Enter Any Job" />
      </label>
      <br />
      <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4" type="submit" :disabled="loading">
        {{ loading ? 'Sending...' : 'Submit' }}
      </button>
    </form>

    <div v-if="result" class="mt-4 p-2 bg-white rounded">
      <h3 class="font-semibold">Response</h3>
      <pre class="text-sm">{{ JSON.stringify(result, null, 2) }}</pre>
    </div>

    <button>
      <router-link class="text-blue-500 hover:underline" to="/">Back to Home</router-link>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const job = ref('')
const loading = ref(false)
const result = ref(null)


async function submitForm() {
  loading.value = true
  result.value = null

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({
        title: name.value,
        body: job.value,
        userId: 1,
      }),
    })

    result.value = await res.json()
    console.log(result.value)
    loading.value = false
    
}
</script>

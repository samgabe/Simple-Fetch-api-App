<template>
  <div class="">
    <h1 class="m-20 font-bold mb-10 ">Home Page</h1>
    <div class="ml-8">
    <router-link class="ml-12 hover:text-blue-400" to="/Posts"> View Posts</router-link>
    <router-link class="ml-12 hover:text-blue-400" to="/Comments">View Comments</router-link>
    <router-link class="ml-12 hover:text-blue-400"to ="/Albums">View Albums</router-link>
    <router-link class="ml-12 hover:text-blue-400" to="/Todos">View Todos</router-link>
    <router-link class="ml-12 hover:text-blue-400" to="/Photos">View Photos</router-link>
    </div>
    <div class="ml-20 mt-15">
        <h2 class="font-semibold">
            To Put data using the Post method.
        </h2>
    <router-link class=" hover:text-blue-400" to="./Put">Click Here to view the Form</router-link>
    </div>
   
  </div>    
</template>
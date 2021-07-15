<template>
  <div v-for="(a,i) in blog" :key="i">
      <h4>{{a.title}}</h4>
      <p>{{a.date}}</p>
      <p>{{a.content}}</p>
      <p>{{a.number}}</p>
  </div>
</template>

<script>
export default {
    name:'List',
    props:{
        blog :Array
    },
    component:{
    }
}
</script>

<style>

</style>

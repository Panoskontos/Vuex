<template>
  <div>
    <ToDo/>
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'

export default {
  name: 'App',
  components: {
    ToDo,
}
}
</script>

<style>
body{
  background-color: lightseagreen;
}
</style>

<template>
  <div>
    <!-- <ToDo/> -->

    <div class="counter">
      <!-- {{counter}} -->
      {{ $store.state.counter }}
    </div>

    <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2</sup> = {{ $store.getters.squared }}
    </div>

    <div class="buttons">
      <!-- commit for mutations -->
      <!-- dispatch for actions -->
      <button @click="$store.commit('decrease')">-</button>
      <button @click="$store.dispatch('increase')">+</button>
    </div>

  </div>
</template>

<script>
// import ToDo from './components/ToDo.vue'

export default {
  name: 'App',
  components: {
    // ToDo,
},
 
}
</script>

<style>
body{
  background-color: rgb(173, 210, 208);
  display: flex;
  justify-content: center;
  align-items: center;
}

.counter{
  margin-top: 80px;
  font-size: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttons button{
  margin-right: 4px;
  padding: 5px 40px;
  background-color: rgb(0, 102, 102);
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  font-size: 30px;
}

</style>

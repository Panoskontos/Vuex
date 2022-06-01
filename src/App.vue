<template>
  <div>
    <!-- <ToDo/> -->

    <div class="counter"
    :style="{ color: $store.state.colorCode}"
    >
      <!-- {{counter}} -->
      {{ $store.state.counter }}
    </div>

    <ButtonsView/>

    <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2</sup> = {{ $store.getters.squared }}
    </div>



    <div>

<br>
<!-- Getters and Setters watch computed function -->
      <input 
      v-model="colorCode"
      placeholder="Enter color code" type="text">
    </div>


  </div>
</template>

<script>
import ButtonsView from './components/ButtonsView.vue';
// import ToDo from './components/ToDo.vue'

export default {
  name: 'App',
  components: {
    ButtonsView
},
computed:{
  colorCode:{
    get() {
      return this.$store.state.colorCode
    },
    set(newValue) {
      // send to mutation
      this.$store.commit("changecolor",newValue);
    }
  }
}
 
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

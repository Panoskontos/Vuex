<template>
    
    <div class="buttons">
      <!-- commit for mutations -->
      <!-- dispatch for actions -->
      <button @click="$store.commit('decrease')">-</button>
      <button @click="$store.dispatch('increase')">+</button>
    </div>
</template>
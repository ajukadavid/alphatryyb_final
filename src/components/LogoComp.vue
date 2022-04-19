<template>
  <div class="justify-center flex bg-black items-center h-screen">
    <div class="text-4xl grid animate-bounce">
      <router-link to="/artists">
        <img alt="alphatryyb logo" src="../assets/Images/alphatryyb.jpg" class="w-20 mx-20">
        <h3 class="text-white prompt-text">Click to proceed</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
 h3 {
   font-family: 'Roboto Condensed', sans-serif;
 }
</style>

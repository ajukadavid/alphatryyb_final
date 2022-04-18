<template>
  <div class="justify-center flex bg-black items-center h-screen">
    <div class="text-4xl">
      <img src="../assets/Images/alphatryyb.jpg" class="w-20">
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
/* Dropdown Button */
.dropbtn {
  background-color: black;
  color: white;
  padding: 15px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  right: 0px;
  background-color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd; color: black}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: black;}
</style>

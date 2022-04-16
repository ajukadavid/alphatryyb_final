<template>
  <div class="flex justify-between p-8">
    <h1 class="text-xl bg-black p-4 text-white">Sounds</h1>
    <div class="dropdown">
      <button class="dropbtn text-xl">Visuals</button>
      <div class="dropdown-content text-sm">
        <a href="#">Music Videos</a>
        <a href="#">Life Na Times</a>
        <a href="#">Link 3</a>
      </div>
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

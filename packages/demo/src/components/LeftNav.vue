<template>
  <div>
    <div :class="isNavOpen? 'nav openNav': 'nav'">
      <a href="javascript:void(0)" class="closebtn" @click="isNavOpen=false">&times;</a>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <span v-if="!isNavOpen" class="burger" @click="isNavOpen=!isNavOpen">&#9776; open</span>
  </div>
</template>

<script>
export default {
  name: "leftNave",
  data: function(){
    return { isNavOpen: false}
  }
};
</script>
    
<style lang="scss" scoped>
.nav {
  width: 250px;
  height: 100%;
  position: fixed; 
  z-index: 1; 
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;

  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  a:hover {
    color: #f1f1f1;
  }

  .closebtn {
    display: none;
  }
}

.burger {
  cursor: pointer;
  left: 0;
  position: fixed;
  top: 0;
  margin: 10px 20px;
}

@media screen and (max-width: 600px) {
  .nav {
    padding-top: 30px;
    width: 0;

    a {
      font-size: 18px;
    }

    .closebtn {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      margin-left: 50px;
    }
  }

  .nav.openNav {
    .closebtn{
      display: block
    }
  }
}

.openNav {
  width: 100%;
}
</style>

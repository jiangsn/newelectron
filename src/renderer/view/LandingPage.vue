<template>
  <div class="container">
    <div>
      <navbar/>
    </div>

    <div class="main">
      <div class="sidebar">
        <sidebar/>
      </div>
      <div class="content">
        <basegroupinput />
        <Basetable />
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import sidebar from '../components/sidebar'
import basegroupinput from '../components/BaseGroupInput'
import Basetable from '../components/Basetable'
export default {
  name: 'landing-page',
  components: { navbar, sidebar, basegroupinput, Basetable },
  methods: {

  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
}
.container{
 width: 100%;

  
}
.sidebar {
  border-right: 1px solid #ddd;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
}

.main {
  display: flex;
  height: 730px;
}
.content{
  flex:1;
}
</style>

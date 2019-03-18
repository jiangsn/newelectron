<template>
  <div class="container">
    <el-row>
      <el-col :span="24">
        <navbar/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5">
        <sidebar/>
      </el-col>
      <el-col :span="19" class="main">
        <Breadcrumb />
        <div class="main-body">

      
        <basegroupinput/>
        <Basetable/>
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import sidebar from '../components/sidebar'
import basegroupinput from '../components/BaseGroupInput'
import Basetable from '../components/Basetable'
import Breadcrumb from '../components/Breadcrumb'

export default {
  name: 'landing-page',
  components: { navbar, sidebar, basegroupinput, Basetable, Breadcrumb },
  methods: {}
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
  height: 100%;
  background: #ddd;
}
.main-body{

  background: white;
}
</style>

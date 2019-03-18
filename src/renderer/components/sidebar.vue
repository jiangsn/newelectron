<template>
  <div class="main">
    <el-menu  :default-openeds="openName" default-active=''>
      <div v-for="item in route" v-bind:key="item.title">
  <el-submenu  :index="item.title" >
        <template slot="title" class="item">
          <i class="el-icon-menu"></i>
          <span>{{item.title}}</span>
        </template>
          <el-menu-item :index="item"  v-for="item in item.route" v-bind:key="item.title">
            <span>{{item}}</span>
          </el-menu-item>
      </el-submenu>
        </div>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'sidebar',
  computed: {
    openName () {
      let l = []
      this.$store.state.Counter.menu.filter(x => {
        l.push(x.title)
      })
      return l
    },
    route () {
      return this.$store.state.Counter.menu
    }
  },
  watch: {

  }

}
</script>



<style lang="scss" scoped>


</style>


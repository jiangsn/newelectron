<template>
  <div class="main">
    <Menu  :open-names="openName" ref="side_menu">
  <Submenu  :name="item.title"  v-for="item in route" v-bind:key="item.title">
        <template slot="title" class="item">
          <Icon class="icon" type="ios-menu"/>
          <span class="blod">{{item.title}}</span>
        </template>
        <div>
          <MenuItem :name="item.route1">
            <span class="offset">{{item.route1}}</span>
          </MenuItem>
          <MenuItem :name="item.route2">
            <span class="offset">{{item.route2}}</span>
          </MenuItem>
        </div>
      </Submenu>
    </Menu>
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
    openName: function () {
      this.$nextTick(() => {
        this.$refs.side_menu.updateOpened()
      })
    }
  }

}
</script>



<style lang="scss" scoped>
.offset{
  padding-left:8px; 
}
.blod{
  font-weight: 700;
}
</style>


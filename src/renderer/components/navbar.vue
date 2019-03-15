<template>
  <div class="container">
    <Row>
      <Col span="24">
        <Menu mode="horizontal" theme="dark" >
          <block v-for="item in menu" v-bind:key="item.name">
          <MenuItem name="item.name"  >
            <Icon type="ios-paper"/>
            <span  v-on:click="ChangeSideBar(item.name)">{{item.name}}</span>
          </MenuItem>
             </block>
        </Menu>     
      </Col>
   
    </Row>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      menu: [{
        name: '游戏管理'
      },
      {
        name: '无盘管理'
      }, {
        name: '客户机管理'
      },
      {
        name: '系统设置'
      }
      ]
    }
  },
  methods: {
    ChangeSideBar (name) {
      this.$store.dispatch({
        type: 'change',
        name: name
      })
    }
  }
}
</script>

<style lang="scss" scopend>
*{
  transition: none;
}
</style>

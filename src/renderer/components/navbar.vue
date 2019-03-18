<template>
  <el-row>
     <el-col :span="17">
     <Menu mode="horizontal" theme='dark' active-name="item.name">
        <MenuItem index="item.name" v-for="item in menu" v-bind:key="item.name" >
        <div v-on:click="ChangeSideBar(item.name)">
                    <Icon type="ios-paper"/>
          <span >{{item.name}}</span>
        </div>

        </MenuItem>
    </Menu>
    </el-col>
    <el-col :span="7" class="ha">
     <span>网吧ID：0000001</span>  <span>在线终端 / 全部终端：1000 / 2000 </span>   <span>授权有效期至： </span>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      menu: [
        {
          name: '游戏管理'
        },
        {
          name: '无盘管理'
        },
        {
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
.ha{
line-height: 60px;
  background: #515a6e;
  color: white;
}
</style>

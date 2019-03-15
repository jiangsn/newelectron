<template>
    <div>
        <Table border ref="selection" :columns="columns4" :data="data1"></Table>
        <Button @click="handleSelectAll(true)">Set all selected</Button>
        <Button @click="handleSelectAll(false)">Cancel all selected</Button>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          columns4: [
            {
              type: 'selection',
              width: 60,
              align: 'center'
            },
            {
              title: '当前状态',
              key: 'status'
            },
            {
              title: '游戏类型',
              key: 'age'
            },
            {
              title: '游戏名称',
              key: 'name'
            },
    
            {
              title: '当前热度',
              key: 'hot'
            },
    
            {
              title: '游戏大小',
              key: 'size'
            },
    
            {
              title: '中心游戏版本',
              key: 'versionCenter'
            },
    
            {
              title: '本地游戏版本',
              key: 'version'
            },
    
            {
              title: '操作',
              key: 'operation'
            }
          ],
          data1: [
            {
              status: '最新版本',
              age: '网络游戏',
              name: 'lean',
              hot: '100',
              version: '13',
              operation: 'xxxx'
            }
          ]
        }
      },
      methods: {
        handleSelectAll (status) {
          this.$refs.selection.selectAll(status)
        }
      }
    }
</script>
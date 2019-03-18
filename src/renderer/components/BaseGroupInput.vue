<template>
  <div class="baseInput">
    <div class="right">
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <div class="left">
      <div class="wrapper">
        <Input search enter-button="搜索" placeholder="请输入分类名称..."/>
      </div>

      <Button type="primary">添加</Button>
      <Button type="primary">编辑</Button>
      <Button type="primary">启用</Button>
      <Button type="primary">停用</Button>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      cityList: [
        { label: '热门游戏', value: '222' },
        { label: '网络游戏', value: '11' },
        { label: '单机游戏', value: '011' },
        { label: '休闲游戏', value: '88' },
        { label: '辅助游戏', value: '00' }
      ],
      model1: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.baseInput {
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  background: white;
}
.right {
  margin-right: 10px;
}
.left {
  display: flex;
  justify-content: flex-start;
}
.wrapper {
  margin-right: 10px;
}
.left button {
  margin-top: 1px;
  margin-right: 10px;
}
</style>


const state = {
  main: 11110,

  menu: ''

}

const mutations = {
  CHANGE_SIDEBAR (state, value) {
    console.log(value.name.name)
    if (value.name.name === '游戏管理') {
      state.menu = [{title: '中心资源', route1: '全部游戏', route2: '今日更新', route3: '系统工具', route4: '停服资源'}, {title: '资源下载', route1: '下载队列', route2: '下载日志'}, {title: '本地资源', route1: '已下载游戏', route2: '本吧游戏'}]
    } else if (value.name.name === '无盘管理') {
      state.menu = [{title: '无盘管理', route1: '无盘管理服务器列表', route2: 'xxxxxx1111'}, {title: '镜像管理', route1: '全部镜像', route2: 'jiangxue'}, {title: '客户机启动', route1: '全部方案', route2: '全部方案2'}]
    } else if (value.name.name === '客户机管理') {
      state.menu = [{title: '客户机管理', route1: '不3好', route2: 'xx1'}, {title: '分类管理23', route1: 'xxx111', route2: 'jiagxue'}, {title: '分类管理3', route1: '你好', route2: 'xxxxxx11ff111111'}]
    }
  }
}

const actions = {
  change ({ commit, state }, value) {
    commit({
      type: 'CHANGE_SIDEBAR',
      name: value,
      state
    })
  }
}

export default {
  state,
  mutations,
  actions

}

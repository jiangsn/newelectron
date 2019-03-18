const state = {
  menu: ''

}

const mutations = {
  CHANGE_SIDEBAR (state, value) {
    console.log(value.name.name)
    if (value.name.name === '游戏管理') {
      state.menu = [ {'title': '中心资源', 'route': ['全部游戏', '今日更新', '系统工具', '停服资源']},
        {'title': '资源下载', 'route': ['下载队列', '下载日志']},
        {'title': '本地资源', 'route': ['已下载游戏', '本吧游戏']} ]
    } else if (value.name.name === '无盘管理') {
      state.menu = [{'title': '无盘管理服务器', 'route': ['无盘管理服务器列表']},
        {'title': '镜像管理', 'route': ['全部镜像']},
        {'title': '客户机启动', 'route': ['全部方案']} ]
    } else if (value.name.name === '客户机管理') {
      state.menu = [{'title': '客户机管理', 'route': ['客户机管理列表']},
        {'title': '客户机设置', 'route': ['菜单设置', '桌面图标']}
      ]
    } else if (value.name.name === '系统设置') {
      state.menu = [{'title': '系统设置', 'route': ['用户设置']}
      ]
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

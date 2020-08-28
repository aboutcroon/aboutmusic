import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'   // 每次通过mutation去修改state的时候，会在控制台打印一个logger，会看到之前的state是什么，现在的state是什么

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'   // 只在开发环境下使用

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,  // 开启严格模式的debug，检测state的修改是不是来源于commit，mutate，否则就会报错
  plugins: debug ? [createLogger()] : []  // plugins支持一个数组
})

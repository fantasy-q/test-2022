import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
      isColored: false,
      colorBtnValue: '改 色',
      pi: Math.PI,
      menus: [],
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    changeColor(state) {
      state.isColored = !state.isColored
    },
    square(state) {
      state.pi = Math.sqrt(state.pi)
    },
    addItem(state) {
      state.menus.push(null)
    },
  },
  getters: {
    getColor: state => {
      return state.isColored
    },
  },
})

export default store

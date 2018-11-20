import components from './components'

const Phoenix = {
  install (Vue, args = {}) {
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key])
    })
  }
}

export default Phoenix

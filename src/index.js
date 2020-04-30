// 导入css
import './assets/sass/index.scss';

// 导入组件
import TradingView from './components/TradingView.vue';

const Plugin = {
  // eslint-disable-next-line
  install(Vue, params = {}) {
    // 自定义参数
    let { componentName } = params

    // 注册私有属性
    if (Vue.prototype.$ava == undefined) {
      Vue.prototype.$ava = {}
    }
    Vue.prototype.$ava.trading_view = {}

    // 注册组件
    Vue.component(componentName || 'trading-view', TradingView)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Plugin)
  if (Plugin.installed) {
    Plugin.installed = false
  }
}

export default Plugin

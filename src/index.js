// 导入css
import "./assets/sass/index.scss";

// 导入组件
import TradingViewComponent from "./components/TradingViewComponent.vue";

const Plugin = {
  // eslint-disable-next-line
  install(Vue, params = {}) {
    // 自定义参数
    let { tradingViewComponent } = params;

    // 注册私有属性
    Vue.prototype.$ava = {};
    Vue.prototype.$ava.trading_view = {};

    // 注册组件
    Vue.component(
      tradingViewComponent || "trading-view-component",
      TradingViewComponent
    ); // 状态按钮
  }
};

export default Plugin;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(Plugin);
  if (Plugin.installed) {
    Plugin.installed = false;
  }
}

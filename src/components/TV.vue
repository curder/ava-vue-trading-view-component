<template>
  <div class="tradingview-widget-container">
    <vue-trading-view :options="options"></vue-trading-view>
  </div>
</template>

<script>
// See:  https://cn.tradingview.com/widget/advanced-chart/
import VueTradingView from "vue-trading-view/src/vue-trading-view.vue";

export default {
  data() {
    return {};
  },
  props: {
    options: {
      type: Object,
      required: true
    }
  },

  mounted() {
    if (this.options.container_id) {
      // 如果存在container_id 则删除它，避免组件渲染完独占一屏
      delete this.options.container_id;
    }
  },

  components: { VueTradingView }
};
</script>

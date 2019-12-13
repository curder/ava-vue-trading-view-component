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

  mounted() {},

  components: { VueTradingView }
};
</script>

<template>
  <trading-view
    src="https://s3.tradingview.com/tv.js"
    :options="options"
  ></trading-view>
</template>
<script>
export default {
  data() {
    return {
      options: {
        autosize: true,
        symbol: "SSE:512550",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "Light",
        style: "1",
        locale: "zh_CN",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "tradingview_e25da"
      }
    };
  }
};
</script>

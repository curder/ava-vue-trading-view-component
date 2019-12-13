<template>
  <div class="tradingview-widget-container">
    <slot></slot>
    <div ref="decimalScripts"></div>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default:
        "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js"
    },
    options: {
      type: Object
    }
  },
  data() {
    return {
      script_id: "trading-view-widget-script"
    };
  },
  mounted() {
    const script = document.createElement("script");
    script.id = this.script_id;
    script.type = "text/javascript";
    script.async = true;
    script.src = this.src;
    script.innerHTML = JSON.stringify(this.options);
    script.onload = onload;
    script.innerHTML = JSON.stringify(this.options);
    this.$refs.decimalScripts.appendChild(script);
  }
};
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="text-center">
      <h1 class="text-5xl text-gray-600 font-semibold">
        Ava Vue Trading View Component
      </h1>
      <p class="text-3xl text-gray-300 tracking-wider font-semibold">
        Trading View Component for ava websites.
      </p>

      <div class="text-left mt-10">
        <h2 class="text-3xl font-semibold text-gray-700">安装</h2>
        <div class="mt-2">
          <code>yarn add -D @curder/ava-vue-trading-view-component</code>
        </div>

        <h3 class="mt-6 text-2xl font-semibold text-gray-700">注册插件</h3>
        <div class="mt-2">
          <code
            >import '@curder/ava-vue-trading-view-component/dist/main.css'; //
            加载css import avaVueTradingViewComponent from
            '@curder/ava-vue-trading-view-component';
            Vue.use(avaVueTradingViewComponent, {})
          </code>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

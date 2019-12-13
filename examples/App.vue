<template>
  <div
    id="app"
    class="antialiased text-gray-900 flex flex-col min-h-screen bg-gray-100"
  >
    <router-view class="flex-1" />
    <div class="flex-shrink-0 py-12 text-center">
      <div>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/"
          >首页</router-link
        >
        <span class="mx-4 text-gray-500">|</span>
        <router-link
          class="font-semibold text-gray-700 hover:underline"
          :to="{ name: 'external-embedding' }"
          >TradingView</router-link
        >

        <span class="mx-4 text-gray-500">|</span>
        <router-link
          class="font-semibold text-gray-700 hover:underline"
          :to="{ name: 'tv-1' }"
          >TV1</router-link
        >

        <span class="mx-4 text-gray-500">|</span>
        <router-link
          class="font-semibold text-gray-700 hover:underline"
          :to="{ name: 'tv-2' }"
          >TV2</router-link
        >
        <span class="mx-4 text-gray-500">|</span>
        <router-link
          class="font-semibold text-gray-700 hover:underline"
          :to="{ name: 'tv-3' }"
          >TV3</router-link
        >
        <span class="mx-4 text-gray-500">|</span>
        <router-link
          class="font-semibold text-gray-700 hover:underline"
          :to="{ name: 'tv-4' }"
          >TV4</router-link
        >
        <span class="mx-4 text-gray-500">|</span>
        <router-link
          class="font-semibold text-gray-700 hover:underline"
          :to="{ name: 'tv-5' }"
          >TV5</router-link
        >
      </div>
      <div class="mt-2">
        <a
          target="_blank"
          href="https://github.com/curder/ava-vue-trading-view-component"
          class="text-sm font-semibold text-gray-600 hover:underline"
          >Source on GitHub</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {}
};
</script>

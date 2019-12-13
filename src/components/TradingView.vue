<template>
  <component :is="component" :src="src" :options="options"></component>
</template>
<script>
import TV from "./TV.vue";
import EmbdedWidget from "./EmbedWidget.vue";

export default {
  props: {
    src: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      component: undefined
    };
  },
  created() {
    this.component = this.isTV() ? TV : EmbdedWidget;
  },

  methods: {
    isTV() {
      return this.src.includes("tv.js");
    }
  },

  components: {
    TV,
    EmbdedWidget
  }
};
</script>

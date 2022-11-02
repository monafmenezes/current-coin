<template>
  <div class="bg-purple h-screen">
    <d-header />
    <router-view class="h-3/4" />
    <d-footer />
  </div>
</template>
<script>
import DHeader from "./components/DHeader.vue";
import DFooter from "./components/DFooter.vue";
export default {
  components: { DHeader, DFooter },
};
</script>

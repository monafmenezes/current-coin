<!-- eslint-disable prettier/prettier -->
<template>
  <div class="bg-purple h-screen overflow-auto flex flex-col items-center">
    <d-header />
    <router-view class="lg:h-3/4" />
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

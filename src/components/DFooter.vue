<template>
  <h5 class="text-sm text-center h-auto text-white">
    Copyright © {{ newDate }}
  </h5>
</template>

<script>
export default {
  name: "DFooter",
  computed: {
    newDate() {
      return new Date().getFullYear();
    },
  },
};
</script>

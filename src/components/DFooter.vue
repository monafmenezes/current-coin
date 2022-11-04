<template>
  <h5 class="text-sm text-center mt-2 text-white">Copyright © {{ newDate }}</h5>
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

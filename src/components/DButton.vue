<template>
  <button
    class="w-full rounded h-14 border-2 border-solid border-gold bg-purple text-gold font-medium transition delay-150 hover:scale-105"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "DButton",
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

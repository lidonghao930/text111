<template>
  <div @click="add">Home+{{ $route.query.happy }}</div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    add() {
      console.log(this.$route);
      console.log(this.$attrs);
    },
  },
};
</script>

<style lang="less" scoped>
</style>

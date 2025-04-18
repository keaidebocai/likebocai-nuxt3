<script setup lang="ts">
const handleMessage = () => {
  message.info("This is a normal message");
};
</script>

<template>
  Hello world! i'm index page!
  <a-button @click="handleMessage"> button </a-button>
</template>

<style scoped lang="scss"></style>

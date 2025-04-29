<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
const route = useRoute();
const layoutName = ref();
if(route.fullPath.includes('mobile')) {
  console.log(route.fullPath)
  layoutName.value = 'mobile';
} else {
  console.log(route.fullPath)
  layoutName.value = 'pc';
}

</script>
<template>
  <div>
    <aConfigProvider
      :locale="zhCN"
    >
      <NuxtLayout :name="layoutName">
        <NuxtPage />
      </NuxtLayout>
    </aConfigProvider>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.9s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

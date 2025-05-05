<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
const layoutName = ref();
const url = useRequestURL();
if (url.pathname.includes('mobile')) {
  layoutName.value = 'mobile';
} else {
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

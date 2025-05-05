<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
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
    <h1>{{ props.error?.statusCode }}</h1>
    <NuxtLink :to="`/${layoutName}/my`">返回首页</NuxtLink>
  </div>
</template>

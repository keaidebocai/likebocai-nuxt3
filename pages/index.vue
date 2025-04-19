<script setup lang="ts">
const handleMessage = () => {
  message.info("This is a normal message");
};
import dayjs, { type Dayjs } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
dayjs.extend(relativeTime);
const days = dayjs('2025-04-19 18:49:56');


const value = ref<Dayjs>();
const onPanelChange = (value: Dayjs, mode: string) => {
  console.log(value, mode);
};

</script>

<template>
  <div>
  <a-button @click="handleMessage"> button </a-button>
  <div style="width: 640px;background-color: #000;">我是谁？</div>
  <a-tooltip :title="days.format('YYYY-MM-DD HH:mm:ss')">
      <span>{{ days.fromNow() }}</span>
  </a-tooltip>
  <br/>
  <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
    <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
  </div>
    <h1>首页</h1>
    <NuxtLink to="/test">测试页面</NuxtLink>
  </div>
</template>

<!-- <style scoped lang="scss"></style> -->

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
  <div style="width: 100%;background-color: #000;">我是谁？</div>

  <br/>
  <ClientOnly fallback-tag="span" fallback="正在加载……" v-for="k in 10">
    <a-tooltip :title="days.format('YYYY-MM-DD HH:mm:ss')">
      <span>{{ days.fromNow() }}</span>
    </a-tooltip>
    <div class="likebocai-calenda">
      <a-calendar :value="value" :fullscreen="false"/>
    </div>
  </ClientOnly>
  
    <h1>首页手机端</h1>
    <NuxtLink to="/mobile/test">测试页面</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.likebocai-calendar {
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}
</style>

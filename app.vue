<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';

const token = reactive({
  colorPrimary: '#00ff66',
  colorBgBase: '#fff',
  fontSize: 16,
  colorTextBase: '#1677ff'
})


const changeColor = () => {
  if (token.colorPrimary == '#00ff66') {
    token.colorPrimary = '#ffdd99'
    message.info('#ffdd99')
    return
  }
  if (token.colorPrimary == '#ffdd99') {
    token.colorPrimary = '#00ff66'
    message.info('#00ff66')
    return
  }
}


</script>
<template>
  <div>
    <aConfigProvider
      :theme="{
        token: token
      }" 
      :locale="zhCN"
    >
    <NuxtPage />
      <aButton @click="changeColor">变色！</aButton>
    </aConfigProvider>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<script setup lang="ts">
    
</script>

<template>
    <!-- 以 360px 为设计稿 加上左右边距的10px，就是350px的设计稿 -->
    <div class="likebocai-mobile-box">
        <MobileHeader />
        <div class="likebocai-mobile-view">
            <slot/>
        </div>
        <MobileFooter />
    </div>
</template>

<style scoped lang="scss">
.likebocai-mobile-box {
    min-width: 350px;
    height: 100vh;
    background-color: antiquewhite;
    .likebocai-mobile-view {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 5px;
        padding-right: 5px;
        min-height: calc(100% - 100px);
    }
}
</style>
<script setup lang="ts">

</script>

<template>
    <div class="likebocai-footer-box">
        <NuxtLink class="likebocai-footer-nav-box" to="/mobile/blog">
            <IconBlog/>
            <div id="email-title" class="likebocai-footer-nav-title">博客</div>
        </NuxtLink>
        <NuxtLink class="likebocai-footer-nav-box" to="/mobile/email">
            <IconEmail/>
            <div id="email-title" class="likebocai-footer-nav-title">时光邮箱</div>
        </NuxtLink>
        <NuxtLink class="likebocai-footer-nav-box" to="/mobile/my">
            <IconMyInfo/>
            <div id="email-title" class="likebocai-footer-nav-title">我的</div>
        </NuxtLink>
        <NuxtLink class="likebocai-footer-nav-box" to="/mobile/eat">
            <IconEat/>
            <div class="likebocai-footer-nav-title">吃什么</div>
        </NuxtLink>
        <NuxtLink class="likebocai-footer-nav-box" to="/mobile/chat">
            <IconAi/>
            <div id="email-title" class="likebocai-footer-nav-title">ChatAi</div>
        </NuxtLink>
    </div>
</template>

<style scoped lang="scss">
.likebocai-footer-box {
    width: 100vw;
    height: 65px;
    background-color: rgba($color: #fff, $alpha: 0.8);
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0px;
    z-index: 999;
    box-shadow: 2px 2px 5px rgba($color: #000000, $alpha: 0.5);
    .likebocai-footer-nav-box {
        text-decoration: none;
        color: inherit;
        text-align: center;
        margin: auto;
        opacity: 50%;
        .likebocai-footer-nav-title {
            font-size: 14px;
            position: relative;
            top: -10px;
        }
    }
    .likebocai-footer-nav-active {
        text-decoration: none;
        color: inherit;
        text-align: center;
        margin: auto;
        opacity: 50%;
        .likebocai-footer-nav-title {
            font-size: 14px;
            position: relative;
            top: -10px;
        }
        opacity: 1;
        transform: scale(1.15);
        transition: transform 0.5s ease;
    }
    #email-title {
        top: -6px;
    }
}
</style>
<template>
    <div class="tabContainer">
        <router-link to="/all">全部</router-link>
        <router-link to="/elite">精华</router-link>
        <router-link to="/week">week</router-link>
        <router-link to="/share">分享</router-link>
        <router-link to="/ques">问答</router-link>
        <router-link to="/recruit">招聘</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .tabContainer {
        width: 100%;
        height: 35px;
        background-color: #046138;
        position: fixed;
        top: 59px;
        left: 0;
    }

    .tabContainer a {
        width: 16.6%;
        height: 25px;
        color: #c8c9ca;
        float: left;
        text-align: center;
        font-size: 13px;
        line-height: 25px;
        text-decoration: none;
    }
</style>



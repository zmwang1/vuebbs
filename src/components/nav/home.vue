<template>
    <div>
        <img class="logo" src="../../images/logo.png" alt="logo">
        <router-link to="publish" class="topublish"><i class="glyphicon glyphicon-comment"></i></router-link>
        <v-tab></v-tab>
        <router-view></router-view>
    </div>
</template>
<script>

import vtab from '../index/tab.vue'

export default {
    components: {
        'v-tab': vtab
    }
}
</script>
<style scoped>
    .logo {
        width: 48px;
        height: 48px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
    }
    .topublish {
        width: 30px;
        height: 30px;
        z-index: 9999;
        position: fixed;
        top: 2%;
        right: 3%;
    }
    .topublish i {
        font-size: 2rem;
        color: #fff;
    }
</style>

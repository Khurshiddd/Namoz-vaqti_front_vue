<template>
    <div class="bg-white mt-4">
    <div class="w-75 m-auto mt-3">
        <router-link :to="{name: 'year.yanvar'}" class="btn btn-info w-100 m-1">Yanvar</router-link> 
        <router-link :to="{name: 'year.fevral'}" class="btn btn-info w-100 m-1">Fevral</router-link> 
        <router-link :to="{name: 'year.mart'}" class="btn btn-info w-100 m-1">Mart</router-link> 
        <router-link :to="{name: 'year.aprel'}" class="btn btn-info w-100 m-1">Aprel</router-link> 
        <router-link :to="{name: 'year.may'}" class="btn btn-info w-100 m-1">May</router-link> 
        <router-link :to="{name: 'year.iyun'}" class="btn btn-info w-100 m-1">Iyun</router-link> 
        <router-link :to="{name: 'year.iyul'}" class="btn btn-info w-100 m-1">Iyul</router-link> 
        <router-link :to="{name: 'year.avgust'}" class="btn btn-info w-100 m-1">Avgust</router-link> 
        <router-link :to="{name: 'year.sentyabr'}" class="btn btn-info w-100 m-1">Sentyabr</router-link> 
        <router-link :to="{name: 'year.oktyabr'}" class="btn btn-info w-100 m-1">Oktyabr</router-link> 
        <router-link :to="{name: 'year.noyabr'}" class="btn btn-info w-100 m-1">Noyabr</router-link> 
        <router-link :to="{name: 'year.dekabr'}" class="btn btn-info w-100 m-1">Dekabr</router-link> 
        <router-view></router-view>
    </div>
    </div>
</template>
<script>
export default {
    name: 'Year'
}
</script>
<style>
    
</style>
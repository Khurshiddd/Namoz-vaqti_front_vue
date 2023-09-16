<template>
    <div class="">
        <div class="bg-success py-4">
            <h1 class="text-center">Namoz vaqtlari</h1>
            <div class="m-auto pt-4 text-center">
                <router-link :to="{ name: 'day' }" class="btn btn-primary">Bugun</router-link>
                <router-link to="month" class="btn btn-primary m-2">Oylik</router-link>
                <router-link to="year" class="btn btn-primary">Yillik</router-link>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavbarView'
}
</script>
<style>

</style>
<template>
    <div>
        <div>
            <div class="text-center">
                <h3 class="p-3 mb-2 bg-info text-dark">Hozirgi Vaqt : 9:35:12</h3>
                <h3 class="p-3 mb-2 bg-light text-dark">Namozgacha : 1:35:12</h3>
            </div>
            <div class="row mb-5 flex-lg-nowrap m-auto par">
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">22:22 <br> Bomdod</div>
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">22:22 <br> Quyosh</div>
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">22:22 <br> Peshin</div>
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">22:22 <br> Asr</div>
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">22:22 <br> Shom</div>
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">22:22 <br> Xufton</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.par{
    max-width: 100%;
    overflow: hidden;
}
.vaqt{
    height: 7rem;
    font-size: 2rem;
    margin-bottom: 2rem;
    background-color: bisque;
    border: 3px solid rgb(142, 142, 102);
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
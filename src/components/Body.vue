<template>
    <div>
        <div>
            <div class="text-center">
                <h3 class="p-3 mb-2 bg-info text-dark">Hozirgi Vaqt : 9:35:12</h3>
                <h3 class="p-3 mb-2 bg-light text-dark">Namozgacha : 1:35:12</h3>
            </div>
            <div v-for="time in times" class="row mb-5 flex-lg-nowrap m-auto par">
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">{{ time.tong_saharlik }}<br> Bomdod(saharlik)</div>
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">{{ time.quyosh }}<br> Quyosh</div>
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">{{ time.peshin }}<br> Peshin</div>
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">{{ time.asr }}<br> Asr</div>
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">{{ time.shom_iftor }}<br> Shom (iftor)</div>
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">{{ time.hufton }}<br> Xufton</div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data () {
        return {
            times: ''
        }
    },
    name: 'Body',
    mounted(){
        this.getDay()
    },
    methods: {
        async getDay() {
            try {
                const response = await axios.get('https://islomapi.uz/api/present/day?region=Toshkent');
                    this.times = response.data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
    
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
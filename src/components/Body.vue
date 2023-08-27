<template>
    <div>
        <div>
            <div class="text-center my-5">
                <h3 class="p-3 mb-2 bg-info text-dark">Hozirgi Vaqt : {{ currentTime }}</h3>
                <!-- <h3 class="p-3 mb-2 bg-light text-dark">Namozgacha : 1:35:12</h3> -->
            </div>
            <div class="row mb-5 flex-lg-nowrap m-auto par">
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">{{ times.tong_saharlik }}<br> Bomdod(saharlik)</div>
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">{{ times.quyosh }}<br> Quyosh</div>
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">{{ times.peshin }}<br> Peshin</div>
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">{{ times.asr }}<br> Asr</div>
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">{{ times.shom_iftor }}<br> Shom (iftor)</div>
                <div class="col-md-4 col-sm-12 col-lg-2 text-center vaqt">{{ times.hufton }}<br> Xufton</div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data () {
        return {
            times: '',
            currentTime: ''
        }
    },
    name: 'Body',
    mounted(){
        this.getDay()
    },
    created() {
        this.timeNow();
        setInterval(this.timeNow, 1000);
    },
    methods: {
        async getDay() {
            try {
                const response = await axios.get('https://islomapi.uz/api/present/day?region=Toshkent');
                this.times = response.data.times;
                console.log(this.times ); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        timeNow(){
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");
            
            this.currentTime = `${hours}:${minutes}:${seconds}`; 
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
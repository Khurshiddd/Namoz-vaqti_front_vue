<template>
    <div>
        <div>
            <div class="text-center my-5">
                <h3 class="p-3 mb-2 bg-info text-dark">Hozirgi Vaqt : {{ currentTime }}</h3>
                <h3 class="p-3 mb-2 text-dark" style="background-color: rgb(248, 245, 96);">Namozgacha : {{ timeRemaining }}</h3>
            </div>
            <div class="row mb-5 flex-lg-nowrap par m-auto">
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
            currentTime: '',
            timeRemaining: "",
            response: {
                times: {
                    tong_saharlik: '',
                    quyosh: '',
                    peshin: '',
                    asr: '',
                    shom_iftor: '',
                    hufton: ''
                }
            },
        }
    },
    name: 'Day',
    mounted(){
        this.getDay();
        this.calculateTimeRemaining();
        setInterval(this.calculateTimeRemaining, 1000);
    },
    created() {
        this.timeNow();
        setInterval(this.timeNow, 1000);
    },
    methods: {
        calculateTimeRemaining() {
            const currentTime = new Date();
            const currentHour = currentTime.getHours();
            const currentMinute = currentTime.getMinutes();
            
            const targetTime = new Date();
            targetTime.setHours(0, 0, 0);
            targetTime.setHours(currentHour, currentMinute);
            
            for (const key in this.response.times) {
                const [hours, minutes] = this.response.times[key].split(":");
                targetTime.setHours(Number(hours), Number(minutes));
                
                if (currentTime < targetTime) {
                    const timeDifference = new Date(targetTime - currentTime);
                    this.timeRemaining = timeDifference.toISOString().substr(11, 8);
                    break;
                }
            }
        },
        async getDay() {
            try {
                const res = await axios.get('https://islomapi.uz/api/present/day?region=Toshkent');
                this.times = res.data.times;
                this.response.times.tong_saharlik = res.data.times.tong_saharlik 
                this.response.times.quyosh = res.data.times.quyosh 
                this.response.times.peshin = res.data.times.peshin 
                this.response.times.asr = res.data.times.asr 
                this.response.times.shom_iftor = res.data.times.shom_iftor 
                this.response.times.hufton = res.data.times.hufton 
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
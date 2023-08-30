<template>
    <div class="bg-light table-responsive">
    <h4 class="p-3 bg-info">Bu yilning {{ monthNumber() }}-oyi</h4>
        <table class="table container table-sm">
            <thead>
                <tr>
                    <th scope="col">Kun</th>
                    <th scope="col">Xafta kuni</th>
                    <th scope="col">Bomdod</th>
                    <th scope="col">Quyosh</th>
                    <th scope="col">Peshin</th>
                    <th scope="col">Asr</th>
                    <th scope="col">Shom</th>
                    <th scope="col">Xufton</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="mon in monthly" :key="mon.day" :class="{'info': mon.day === getDay()}">
                    <th scope="row">{{ mon.day }}</th>
                    <td>{{ mon.weekday }}</td>
                    <td>{{ mon.tong_saharlik }}</td>
                    <td>{{ mon.quyosh }}</td>
                    <td>{{ mon.peshin }}</td>
                    <td>{{ mon.asr }}</td>
                    <td>{{ mon.shom_iftor }}</td>
                    <td>{{ mon.xufton }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Month',
    data(){
        return {
            monthly: {},
        }
    },
    mounted(){
        this.getMonth()
        this.monthNumber()
        this.getDay()
    },
    methods: {
        monthNumber(){
            const currentDate = new Date();
            const currentDay = currentDate.getMonth()+1;
            return currentDay;
        },
        getMonth(){
            const number = this.monthNumber()
            axios.get(`https://islomapi.uz/api/monthly?region=Toshkent&month=${number}`)
            .then(req => {
                const times = req.data
                const month = [];
                for(let i = 0; i < times.length; i++){
                    month.push({
                        day: times[i].day,
                        weekday: times[i].weekday,
                        tong_saharlik: times[i].times.tong_saharlik,
                        quyosh: times[i].times.quyosh,
                        peshin: times[i].times.peshin,
                        asr: times[i].times.asr,
                        shom_iftor: times[i].times.shom_iftor,
                        xufton: times[i].times.hufton
                    });
                }
                this.monthly = month
            })
        },
        getDay(){
            const d = new Date();
            const b = d.getDate();
            return b;
        }
    }
}
</script>
<style scoped>
    .info{
        background-color: aquamarine;
    }
</style>
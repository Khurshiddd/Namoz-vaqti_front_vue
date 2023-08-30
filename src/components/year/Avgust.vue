<template>
    <div class="bg-light table-responsive">
    <h3 class="bg-info p-3">Avgust</h3>
        <table class="table-auto container">
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
                <tr v-for="mon in monthly">
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
    name: 'Avgust',
    data(){
        return {
            monthly: {},
        }
    },
    mounted(){
        this.getMonth()
    },
    methods: {
        getMonth(){
            axios.get('https://islomapi.uz/api/monthly?region=Toshkent&month=8')
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
        }
    }
}
</script>
<style>
    
</style>
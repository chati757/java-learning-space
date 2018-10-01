<template>
    <div>
        <button v-on:click="loadChart()">myChart</button>
        <button v-on:click="loadChart2()">myChart2</button>
        <div class="chart-container" style="position: relative; height:60vh; width:60vw ;border:1px solid #000000;">
            <canvas id="myChart"></canvas>
            <canvas id="myChart2"></canvas>
        </div>
    </div>
</template>

<style scoped>
    .chart-container{
        background:red;
    }
    #myChart2{
        background:#536653;
    }
</style>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
    },
    methods:{
        set_default_fontcolor(color){
            return new Promise((resolve,reject)=>{
                resolve(
                    this.$chartjs.defaults.global.defaultFontColor = color
                )
                reject(
                    'error'
                )
            })
        },
        buildChart(){
            const ctx = document.getElementById("myChart").getContext('2d')
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            })
        },
        buildChart2(){
            const ctx = document.getElementById("myChart2").getContext('2d')
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'My First dataset',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: 'white',
                        borderColor: 'white',
                        borderWidth: 1,
                        fill: false,
                    }]
                },
                options: {
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            fontColor: 'white'
                        }
                    },
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Chart.js Line Chart'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Value'
                            }
                        }]
                    },
                }
            })
        },
        loadChart(){
            this.set_default_fontcolor("black").then(
                this.buildChart()
            )
        },
        loadChart2(){
            this.set_default_fontcolor("white").then(
                this.buildChart2()
            )
        }
    }
}
</script>
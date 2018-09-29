<template>
    <no-ssr>
        <div style="width:70%;margin:20px auto;height:400px">
            <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
                <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
                <div slot="loading" style="left:50%">loading..</div>
            </slider>
        </div>
    </no-ssr>
</template>

<style lang="scss">
    .slider-loading{
        left:45%
    }
</style>

<script>
export default {
    data(){
        return {
        //Image list
        someList:[],
        //Sliding configuration [obj]
        options: {
          currentPage: 0,
          thresholdDistance:500,
          thresholdTime:100,
          autoplay:1000,
          loop:true,
          direction:'vertical',
          loopedSlides:1,
          slidesToScroll:1,
          timingFunction: 'ease',
          speed: 1000
        }
      }
    },
    mounted () {
        let that = this
        setTimeout(function () {
            that.someList = [
                {
                    html: 'slide1',
                    style: {
                        'background': '#1bbc9b'
                    }
                },
                {
                    html: 'slide2',
                    style: {
                        'background': '#4bbfc3'
                    }
                },
                {
                    html: 'slide3',
                    style: {
                        'background': '#7baabe'
                    }
                }
            ]
        }, 2000)
    },
    methods: {
        // Listener event
        slide (data) {
            //console.log(data)
        },
        onTap (data) {
            //console.log(data)
        },
        onInit (data) {
            //console.log(data)
        }
    }
}
</script>

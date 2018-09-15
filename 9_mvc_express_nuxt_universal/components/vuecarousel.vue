<template>
    <div>
        <!--ref:https://ssense.github.io/vue-carousel/examples/-->
        <!--480,2 is 2 slides on mobile (<= 480px) and 768, 3 is 3 slides on tablet (<= 768)-->
        <carousel :navigationEnabled="true" :autoplay="false" :loop="true" :perPageCustom="[[480, 2], [768, 3]]"
        paginationActiveColor="#42b983" paginationColor="#b2ebd1" paginationSize="10" easing="linear" speed="500">
            <slide>
                <div class="test1">
                    Slide 1 Content
                </div>
            </slide>
            <slide>
                <div class="test2">
                    Slide 2 Content
                </div>
            </slide>
            <slide>
                <div class="test1">
                    Slide 3 Content
                </div>
            </slide>
            <slide>
                <div class="test2">
                    Slide 4 Content
                </div>
            </slide>
        </carousel>
    </div>
</template>

<style scoped lang="scss">
    .VueCarousel-slide {
        position: relative;
        font-family: Arial;
        font-size: 24px;
        text-align: center;
        min-height: 100px;
        background:rgb(149, 149, 236);

        //for resolve gap between slide
        margin-inline-start: -0.7px;
        padding-right:1px;
        .test1{
            background:red;
        }
        .test2{
            background:rgb(124, 233, 124);
            color:black;
        }
    }
    .label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

<script>
export default {
    
}
</script>


<template>
    <div class="container">
        <button id='all' v-on:click="filter_shuffle('')">All</button>
        <button id='btn-animal' v-on:click="filter_shuffle('animal')">animal</button>
        <button id='btn-city' v-on:click="filter_shuffle('city')">city</button>
        <button id='btn-nature' v-on:click="filter_shuffle('nature')">nature</button>
        <div class="row my-shuffle-container">
        <div class="col-4@sm picture-item column" data-groups='["animal"]' data-date-created="2016-08-12" data-title="Crocodile">
            <div class="aspect aspect--16x9">
            <div class="aspect__inner">
                <img src="@/static/images/animal1.png" alt="A close, profile view of a crocodile looking directly into the camera" />
            </div>
            </div>
        </div>
        <div class="col-4@sm picture-item column" data-groups='["city"]' data-date-created="2016-06-09" data-title="Crossroads">
            <div class="aspect aspect--16x9">
            <div class="aspect__inner">
                <img src="@/static/images/city1.png" alt="A multi-level highway stack interchange in Puxi, Shanghai" />
            </div>
            </div>
        </div>
        <div class="col-4@sm picture-item column" data-groups='["nature"]' data-date-created="2015-10-20" data-title="Central Park">
            <div class="aspect aspect--16x9">
            <div class="aspect__inner">
                <img src="@/static/images/nature1.png" alt="Looking down on central park and the surrounding builds from the Rockefellar Center" />
            </div>
            </div>
        </div>
        <div class="col-4@sm picture-item column" data-groups='["animal"]' data-date-created="2016-08-12" data-title="Crocodile">
            <div class="aspect aspect--16x9">
            <div class="aspect__inner">
                <img src="@/static/images/animal2.png" alt="A close, profile view of a crocodile looking directly into the camera" />
            </div>
            </div>
        </div>
        <div class="col-4@sm picture-item column" data-groups='["nature"]' data-date-created="2015-10-20" data-title="Central Park">
            <div class="aspect aspect--16x9">
            <div class="aspect__inner">
                <img src="@/static/images/nature2.png" alt="Looking down on central park and the surrounding builds from the Rockefellar Center" />
            </div>
            </div>
        </div>
        <div class="col-1@sm my-sizer-element"></div>
        </div>
    </div>
</template>

<style scoped>
    /* quick grid */
    .container {
        width: 93%;
        margin: auto;
    }

    /* Bootstrap-style columns */
    .column {
        position: relative;
        float: left;
        min-height: 1px;
        width: 25%;
        padding-left: 4px;
        padding-right: 4px;
        
        /* Space between tiles */
        margin-top: 8px;
    }

    .col-span {
        width: 50%;
    }

    .my-sizer-element {
        width: 8.33333%;
    }

    /* default styles so shuffle doesn't have to set them (it will if they're missing) */
    .my-shuffle {
        position: relative;
        overflow: hidden;
    }

    /* Ensure images take up the same space when they load */
    /* https://vestride.github.io/Shuffle/images */
    .aspect {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        overflow: hidden;
    }

    .aspect__inner {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .aspect--16x9 {
        padding-bottom: 56.25%;
    }

    .aspect--9x80 {
        padding-bottom: calc(112.5% + 8px);
    }

    .aspect--32x9 {
        padding-bottom: calc(28.125% - 3px);
    }

    img {
        display: block;
        width: 100%;
        
        max-width: none;
        height: 100%;
        object-fit: cover;
    }

    /* Small reset */
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    figure {
        margin: 0;
        padding: 0;
    }
    figure:nth-child(2n){
        margin-bottom:30px;
    } 
    figure:nth-child(2n+1){
        margin-top:30px;
    } 
</style>

<script>
export default {
    data(){
        return{
            shuffleInstance:null
        }
    },
    mounted(){
        this.init_shuffle()
    },
    methods:{
        init_shuffle(){
            const Shuffle = this.$shuffle
            const element = document.querySelector('.my-shuffle-container')
            const sizer = element.querySelector('.my-sizer-element')

            this.shuffleInstance = new Shuffle(element, {
                itemSelector: '.picture-item',
                sizer: sizer // could also be a selector: '.my-sizer-element'
            })
            // shuffleInstance.filter('animal');
            /*
            $("#all").on("click", function(){
                shuffleInstance.filter();
            });
            $("#btn-animal").on("click", function(){
                shuffleInstance.filter('animal');
            });
            $("#btn-city").on("click", function(){
                shuffleInstance.filter('city');
            });
            $("#btn-nature").on("click", function(){
                shuffleInstance.filter('nature');
            });
            */
        },
        filter_shuffle(filterdata){
            console.log('filterdata ',filterdata)
            //this.shuffleInstance.filter([filterdata,'city'])
            this.shuffleInstance.filter(filterdata)
        }
        /*
            //edit button to button group
            //Craete search using computed call this.filter_shuffle and get filterdata from buttom group and push typing data
        */
        /*
            //Create the sort options to give to Shuffle.
            var value = evt.target.value;
            var options = {};

            function sortByDate(element) {
                return element.getAttribute('data-created');
            }

            function sortByTitle(element) {
                return element.getAttribute('data-title').toLowerCase();
            }

            if (value === 'date-created') {
                options = {
                reverse: true,
                by: sortByDate,
                };
            } else if (value === 'title') {
                options = {
                by: sortByTitle,
                };
            }

            this.shuffle.sort(options);
        */
    }
}
</script>



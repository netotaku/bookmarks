<template>
  <div class="hero">
    <div id="js-clouds-layer-1" class="hero__clouds hero__clouds--layer-1">
        <div id="js-clouds-layer-2" class="hero__clouds hero__clouds--layer-2"></div>    
    </div>
    <a class="hero__clarky" href="#"></a>
  </div>  
</template>

<script>
export default {
    mounted: function(){
        this.layer1_X = 0;
        this.layer2_X = 0;
        this.layer1 = document.getElementById('js-clouds-layer-1');
        this.layer2 = document.getElementById('js-clouds-layer-2');        
        this.animate();
    },
    methods: {
        animate: function(){            
            setTimeout(() => {

                this.layer1_X+=.5;
                this.layer2_X+=.25;

                if(this.layer1_X > 1192.5){
                    this.layer1_X = 0;
                }
                if(this.layer2_X > 1192.5){
                    this.layer2_X = 0;
                }

                this.layer1.style.backgroundPosition = -this.layer1_X+'px';
                this.layer2.style.backgroundPosition = -this.layer2_X+'px';

                this.animate();

            }, 100)
        }
    }
}
</script>


<style scoped lang="scss">
    .hero{
        position: relative;
        height: 170px;
        background: url(/hero/shim.jpg);
        background-repeat: repeat-x; 
        background-position: left bottom;
        background-color: #79C9FA;
        &__clarky{
            position: absolute;
            bottom: -1px;
            left: 8vw;

            width: 57px;
            height: 105px;
            background-image: url(/hero/clarky.png);
            background-position: -57px;
            background-repeat: no-repeat;            
            &:hover, &:focus{
                background-position: 0px;
            }

        }
        &__clouds{
            position: absolute;
            width: 100%;
            height: 170px;            
            background-position: center 8px;
            background-repeat: repeat-x;
            &--layer{
                &-1{
                    background-image: url(/hero/clouds-layer-1.png);
                }
                &-2{
                    background-image: url(/hero/clouds-layer-2.png);
                }
            }
        }
    }
</style>
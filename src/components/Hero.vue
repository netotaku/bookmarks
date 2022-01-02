<template>
  <div class="hero">
    <div class="hero__clouds"></div>    
    <a class="hero__clarky" href="#"></a>
  </div>  
</template>


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
            bottom: 0px;
            left: 8vw;

            width: 18px;
            height: 70px;
            background-image: url(/hero/clarky.png);

        }
        &__clouds{
            position: absolute;
            width: 100%;
            height: 170px;
            background-image: url(/hero/clouds.png);
            background-position: center 8px;
            background-repeat: repeat-x;
        }
    }
</style>
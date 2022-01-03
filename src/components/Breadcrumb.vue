<template> 
    <div class="breadcrumb">
        <div class="breadcrumb__links">

            <router-link class="breadcrumb__link" to="/">
                <span><i class="far fa-list-alt"></i></span></router-link>

            <router-link 
                v-for="item in trim(cursor.fields.path)" :key="item.sys.id"
                class="breadcrumb__link" 
                :to="{
                    name: 'Category',
                    params: {
                    slug: item.fields.trail
                    }
                }">
                <span>
                    {{ item.fields.label }}
                </span>
            </router-link>  
               
        </div>
        <a v-if="$route.path != '/'" class="breadcrumb__back" href="#" @click.prevent="back()">Back</a>
    </div>
</template>

<script>
export default{
    name: 'Breadcrumb',
    props: ['cursor'],
    methods: {
        trim: function(arr){
            let o = [];
            for(let i = 1; i < arr.length; i++ ) o.push(arr[i]);      
            return o;
        },
        back: function(){
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
}  
</script>

<style lang="scss">
@import "../scss/_vars.scss";
.breadcrumb{

    background: #B8D2AC;
    position: relative;
    // display: flex;
    // align-items: center;
    // justify-content: space-between;


    &__back{
        display: flex;
        padding: $gutter;
        color: #1F460C;
        position: absolute;
        right: 0px;
        top: 0px;
        background: url(/grad.png);
        padding-left: 32px;
    }

    &__links{
        display: flex;        
        position: relative;
        overflow: auto;
    }
    

    &__link{
        color: white;
        display: block;
        padding: $gutter;
        

        white-space: nowrap;

        text-decoration: none;

        &:hover{
            
        }

        &:nth-child(1){
            background: #f90;
        }

        &:nth-child(2){
            background: #1F460C;
        }

        &:nth-child(3){
            background: #377D14;
        }
        &:nth-child(4){
            background: #52B91E;
        }
        &:nth-child(5){
            background: #BBED30;
        }                
    }


    @media only screen and (min-width : $break) {  
        &__link{
            transform: skew(45deg); /* SKEW */
            padding: 8px 30px;
            span{
                display: block;
                transform: skew(-45deg); /* SKEW */
            }
            &:nth-child(1){            
                padding-left: 50px;
                margin-left: -30px;
            }
        }
    }
}
</style>
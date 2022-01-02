<template> 
    <div class="breadcrumb">
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
        }
    }
}  
</script>

<style lang="scss">
.breadcrumb{

    display: flex;
    background: #B8D2AC;

    position: relative;
    overflow: auto;

    &__link{
        color: white;
        display: block;
        padding: 8px 30px;
        transform: skew(45deg); /* SKEW */
        white-space: nowrap;

        text-decoration: none;

        &:hover{
            
        }

        span{
            display: block;
            transform: skew(-45deg); /* SKEW */
        }

        &:nth-child(1){
            background: #f90;
            padding-left: 50px;
            margin-left: -30px;
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
}
</style>
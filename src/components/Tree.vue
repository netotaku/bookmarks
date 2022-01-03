<template>
    <ul>
        <li v-for="item in items" 
            :key="item.sys.id"
            :id="item.sys.id"
            class="js-link">
              <Link 
                :slug="item.fields.slug"
                :label="item.fields.label"
                :children="item.fields.categories"
                :path="item.fields.path"
                :trail="item.fields.trail"
                :count="0" />
        </li>
    </ul>
</template>

<script>
import Link from './Link.vue'
export default {
    props: ['items'],
    components: {
        Link
    }
}
</script>

<style lang="scss">
@import "../scss/_vars.scss";
.menu{
    
    background: #F1F5D9;

    display: none;

    &__link{
    
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        border-bottom: solid 1px #B8D2AC;

        &__a{
            display: inline-block;
            text-decoration: none;
            color: #1F460C;
            padding: $gutter;
        }

        &__expand{
            background: rgba(0,0,0,.05);
            color: #377D14;
            padding: $gutter;
            cursor: pointer;
        }
    } 

    /////////

    .js-selected > span{
        a{
            border-left: solid 8px #f90;
            padding-left: 12px;
        }        
        background: #FFDEA2;
    }

    ul{
        list-style-type: none;
        li{
            a{ 

            }
            li{  
                border-left: solid 8px #377D14; 
                a{ 
                    font-weight: bold; 
                }
                li{
                    border-color: #52B91E;
                    a{ font-weight: normal; }
                    li{
                        border-color: #BBED30;
                        a{ }
                        li{
                            a{ }
                        }
                    }
                }
            }
        } 
    }
 
    /////////

    @media only screen and (min-width : $break) {  
        display: block;
        border-right: solid 1px #B8D2AC;
    }
    
}
</style>

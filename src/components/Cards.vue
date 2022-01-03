<template>
    <div class="section section--equal">

        
        
        <div v-if="cursor.fields.links && cursor.fields.links.length > 0" class="panel links">
            <p class="panel__title"><i class="fas fa-external-link-square-alt"></i><span>{{ cursor.fields.label }}</span></p>
            <ul>
                <li v-for="link in cursor.fields.links" :key="link.sys.id">
                    <Card
                    :link="link"
                    />
                </li>
            </ul>
        </div>


        
        <div class="panel children" v-if="cursor.fields.categories && cursor.fields.categories.length > 0">
            <p class="panel__title"><i class="fas fa-folder-open"></i></p>
            <ul> 
                <li v-for="child in cursor.fields.categories" :key="child.sys.id">
                    <router-link 
                        :to="{
                            name: 'Category',
                            params: {
                            slug: child.fields.trail
                            }
                        }">                    
                        <span>{{ child.fields.label }}</span>
                        <i class="fas fa-chevron-right"></i>
                    </router-link>    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue'
export default {
    components: {
        Card
    },
    props: ['cursor']
}
</script>

<style lang="scss">
    @import "../scss/_vars.scss";

    .links{
        ul{
            list-style-type: none;
            li:not(:last-child){
                margin-bottom: $space;
            }
        }
    }

    .links + .children{
        margin-top: $space;
    }

    .children{
        ul{
            list-style-type: none;
            li{        
                a{
                    i{
                        display: none;
                    }
                }
            }
        }
    }

    @media only screen and (max-width : $break) {  
        .children{            
            ul{
                li{
                    &:not(:last-child){
                        margin-bottom: $space;
                    }
                    a{
                        display: block;
                        padding: $space;                        
                        background: orange;
                        border-radius: 8px;
                        position: relative;
                        overflow: hidden;
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        color: white;
                        // border: solid 1px #B8D2AC;
                        i{
                            display: inline-block;
                           // color: #1F460C;
                        }
                        span{
                            // text-decoration: underline;
                            font-weight: bold;
                        }
                    }
                } 
            }           
        }
    }

    .panel{
        &__title{
            font-size: 1.6em;
            margin-bottom: $space;
            span{
                display: inline-block;
                margin-left: 8px;
                font-weight: bold;
            }
        }
    }
        

</style>

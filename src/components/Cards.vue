<template>
    <div class="section section--equal">
        
        <ul v-if="cursor.fields.links && cursor.fields.links.length > 0" class="links">
            <li v-for="link in cursor.fields.links" :key="link.sys.id">
                <Card
                :link="link"
                />
            </li>
        </ul>
        
        <div class="children" v-if="cursor.fields.categories && cursor.fields.categories.length > 0">
            <p class="children__title"><i class="fas fa-folder-open"></i></p>
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
        list-style-type: none;
        li:not(:last-child){
            margin-bottom: $space;
        }
    }

    .links + .children{
        margin-top: $space;
    }

    .children{
        &__title{
            font-size: 1.8em;
            margin-bottom: $space;
        }
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

</style>

<template>
    <div class="header section section--equal">
        <h1>{{ cursor.fields.label }}</h1>
        <div v-if="cursor.fields.links && pageSize < cursor.fields.links.length" class="pagination">
            <a href="#" @click.prevent="next(-1)">prev</a>
            <a href="#" @click.prevent="next(1)">next</a>
        </div>
        <a v-if="$route.path != '/'" class="header__back" href="#" @click.prevent="back()">Back</a>
    </div>
    <div class="section section--equal">

        <div v-if="cards && cards.length > 0" class="panel links">            
            <ul class="hg hg--gap">
                <li v-for="link in cards" :key="link.sys.id" class="hg__u hg__u--thd js-card">
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
import {VueMasonryPlugin} from 'vue-masonry';
import Card from './Card.vue'

export default {
    components: {
        Card, VueMasonryPlugin
    },
    data: function(){
        return {
            pageSize: 9,
            cards: []
        }
    },
    props: ['cursor'],
    mounted: function(){
        this.paginate();
    },
    methods: {
        back: function(){
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        paginate: function(){
            let page = []
            
            if(this.cursor.fields.links && this.cursor.fields.links.length > this.pageSize){
                for(let i = 0; i < this.pageSize; i++){
                    page.push(this.cursor.fields.links[i]);
                }                                             
            } else {
                page = this.cursor.fields.links;
            }

            this.cards = page; 
        },
        next: function(inc){
            inc;
        }
    },
    beforeUpdate: function(){
        this.paginate();
    }
}
</script>

<style lang="scss">
    @import "../scss/_vars.scss";

    .header{    
        // color: #B8D2AC;
        background: rgba(0,0,0,.05);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1{
            line-height: 1.1;
            font-size: 1.2em;        
        }
        &__back{
            color: #1F460C;
        }
    }

    .links{
        ul{
            list-style-type: none;
            li:not(:last-child){
                //margin-bottom: $space;
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
            font-size: 1.3em;
            margin-bottom: $space;
            span{
                // display: inline-block;
                // margin-left: 8px;
                font-weight: bold;
            }
        }
    }

    .js-hide{
        display: none;
    }
        

</style>

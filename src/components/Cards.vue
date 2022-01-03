<template>
    <div class="section section--equal">
        <div v-if="cursor.fields.links && cursor.fields.links.length > 0">
            <ul class="links">
                <li v-for="link in cursor.fields.links" :key="link.sys.id">
                    <Card
                    :link="link"
                    />
                </li>
            </ul>
        </div>
        <div v-if="cursor.fields.categories && cursor.fields.categories.length > 0">
            <h1><i class="fas fa-folder-open"></i></h1>
            <ul class="children"> 
                <li v-for="child in cursor.fields.categories" :key="child.sys.id">
                    <router-link 
                    :to="{
                        name: 'Category',
                        params: {
                        slug: child.fields.trail
                        }
                    }">
                    <span>
                        {{ child.fields.label }}
                    </span>
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
    .card{
        &__link{
            a{
                font-size: 1.2em;
                text-decoration: none;
                word-break: break-word;
            }       
        }
        &__data{
            color: rgba(0,0,0,.3);
            font-family: monospace;
        }
    }
    .children{
        list-style-type: none; 
    }
</style>

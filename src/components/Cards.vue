<template>
    <div v-if="cursor.fields.links && cursor.fields.links.length > 0" class="section section--equal section--green">
        <ul class="links">
          <li v-for="link in cursor.fields.links" :key="link.sys.id">
            <Card
              :link="link"
            />
          </li>
        </ul>
    </div>
    <div v-if="cursor.fields.categories && cursor.fields.categories.length > 0" class="section section--equal">
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

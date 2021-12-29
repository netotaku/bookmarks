<template>    
   
        <router-link :to="{ 
                name: trail.length > 0 ? 'Category' : 'Index',
                params: {
                    slug: trail
                }
            }">
                
                <span class="menu__link">{{ label }} 
                    <span v-if="count > 0">({{ count }})</span>
                </span>

                <i v-if="children && trail.length > 0" class="fas fa-angle-down"></i>
            
            </router-link>  

        <ul v-if="children">
            <li v-for="child in children"
                :key="child.sys.id">
                <Tree 
                    :slug="child.fields.slug"
                    :label="child.fields.label"
                    :children="child.fields.categories"
                    :path="child.fields.path"
                    :trail="child.fields.trail"
                    :count="child.fields.links ? child.fields.links.length : 0"></Tree>                               
            </li>
        </ul>
 
</template>

<script>
export default {
  name: 'Tree',
  props: [ 'slug', 'label', 'children', 'path', 'count', 'trail' ],
}
</script>
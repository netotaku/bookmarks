<template>    

    <span class="menu__link">
        <span>
            <router-link class="menu__link__a" :to="{ 
                name: trail.length > 0 ? 'Category' : 'Index',
                params: {
                    slug: trail
                }
            }">{{ label }}</router-link> 
            <sup v-if="count > 0" class="menu__link__count pill">
                {{ count }}</sup>    
        </span>        
        <span v-if="children" class="menu__link__expand">
            <i class="fas fa-angle-down"></i></span>
    </span>

    <ul v-if="children">
        <li v-for="child in children"
            :key="child.sys.id"
            :id="child.sys.id"
            class="js-link">
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
  props: [ 'slug', 'label', 'children', 'path', 'count', 'trail' ]
}
</script>
<template>    
   
        <router-link :to="{ 
            name: 'Category',
            params: {
                slug: slug
            }
            }">{{ label }}</router-link>  

        <ul v-if="children">
            <li v-for="child in children"
                :key="child.sys.id">
            <Tree 
                :slug="child.fields.slug"
                :label="child.fields.label"
                :children="child.fields.categories"></Tree>                               
            </li>
        </ul>

 
</template>

<script>
export default {
  name: 'Tree',
  props: [ 'slug', 'label', 'children' ],
//   data: function(){
//       return {
//           children: false
//       }
//   },
  components: {
      Tree: () => import('../components/Tree.vue')
  },
  mounted: function(){
    //   console.log(this.link);
    // if(this.link.fields.categories.length > 0){
    //     this.children = this.link.fields.categories;
    // }      
  }
}
</script>
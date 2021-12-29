<template>

  <section class="section">
    <h2>{{ cursor.fields.label }}</h2>

    <table v-if="cursor.fields.links && cursor.fields.links.length > 0">
      <tr v-for="link in cursor.fields.links" :key="link.sys.id">
        <td><a target="_blank" href="{{ link.fields.url }}">{{ link.fields.url }}</a></td>
      </tr>
    </table>

  </section>
  
  <menu class="menu">    
    <ul>
        <li v-for="item in items" :key="item.sys.id">
            <Tree 
              :slug="item.fields.slug"
              :label="item.fields.label"
              :children="item.fields.categories"
              :path="item.fields.path"
              :trail="item.fields.trail"
              :count="0"></Tree>
        </li>
    </ul>
  </menu>

</template>

<script>

import Tree from './components/Tree.vue'

export default {
  components: {
    Tree
  },
  data: function(){
    return {
      items: [],
      cursor: {
        fields: {
          label: 'test',
          links: [],
          categories: []
        }
      }
    }
  },
  mounted: function(){
    this.items = this.$categoryTree;
  },
  watch: {
    $route(to, from) {
      to, from;      
        this.cursor = this.$categoryIndex[this.$route.fullPath];
    }
  },  
}
</script>


<style lang="scss">
  
  @import "./scss/_vars.scss";
  @import "./scss/_globals.scss";
  @import "./scss/_menu.scss";
  @import "./scss/_layout.scss";

  .section{
    padding: $gutter;
  }

</style>

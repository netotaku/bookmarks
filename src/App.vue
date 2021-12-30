<template>

  <div class="hg">
    <menu class="hg__u hg__u--qtr menu">    
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

    <section class="hg__u hg__u--3-qtrs section section--green">
      <h2>{{ cursor.fields.label }}</h2>

      <ul class="links" v-if="cursor.fields.links && cursor.fields.links.length > 0">
        <li v-for="link in cursor.fields.links" :key="link.sys.id">
          <Card
            :link="link"
           />
        </li>
      </ul>

    </section>
  </div>

</template>

<script>
import Tree from './components/Tree.vue'
import Card from './components/Card.vue'

export default {
  components: {
    Tree, Card
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
  @import "./scss/_pill.scss";
  @import "./scss/_grid.scss";
  @import "./scss/_menu.scss";
  @import "./scss/_links.scss";
  @import "./scss/_card.scss";  

  .section{
    padding: $gutter;
    &--green{
      background: #D4E3CD;
    }
  }

  .hg{    
    @include hgrid(12, 0px, $break, true);  
  }

</style>

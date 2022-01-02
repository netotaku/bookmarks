<template>

  <header class="header">
    <div class="header__hero"></div>
    <div class="breadcrumb">
      <router-link class="breadcrumb__link" to="/">
        <span><i class="far fa-list-alt"></i></span></router-link>
        <router-link 
          v-for="item in trim(cursor.fields.path)" :key="item.sys.id"
          class="breadcrumb__link" 
          :to="{
            name: 'Category',
            params: {
              slug: item.fields.trail
            }
          }">
          <span>
            {{ item.fields.label }}
          </span>
        </router-link>      
    </div>
  </header>

  <div class="hg">
    <menu class="hg__u hg__u--qtr menu">    
      <ul>
          <li v-for="item in items" 
            :key="item.sys.id"
            :id="item.sys.id"
            class="js-link">
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

    <section class="hg__u hg__u--3-qtrs content">      
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
    </section>
  </div>

  <footer class="footer"></footer>

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
          categories: [],
          path: []
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
        let as = document.querySelectorAll('.js-link');
        for(let i = 0; i < as.length; i++){
          as[i].classList.remove('js-selected');
        }
        document.getElementById(this.cursor.sys.id).classList.add('js-selected');
    }
  },
  methods: {
    trim: function(arr){
      let o = [];
      for(let i = 1; i < arr.length; i++ ) o.push(arr[i]);      
      return o;
    }
  }  
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
  @import "./scss/_header.scss";
  @import "./scss/_content.scss";  
  @import "./scss/_children.scss";  

  .section{
    padding: $gutter;
    &--green{
      // background: #D4E3CD;
      background: #E2F2DA;
    } 
    &--white{
      background: white;
    }    
    &--equal{
      padding: $space;
    }
  }

  .hg{    
    @include hgrid(12, 0px, $break, true);  
  }

</style>

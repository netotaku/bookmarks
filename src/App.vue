<template>

  <Hero />
  <Breadcrumb :cursor="cursor" />


  <div class="hg">
    <menu class="hg__u hg__u--qtr menu">    
      <ul>
          <li v-for="item in items" 
            :key="item.sys.id"
            :id="item.sys.id"
            class="js-link">
              <Link 
                :slug="item.fields.slug"
                :label="item.fields.label"
                :children="item.fields.categories"
                :path="item.fields.path"
                :trail="item.fields.trail"
                :count="0" />
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
import Link from './components/Link.vue'
import Card from './components/Card.vue'
import Hero from './components/Hero.vue'
import Breadcrumb from './components/Breadcrumb.vue'

export default {
  components: {
    Link, Card, Hero, Breadcrumb
  },
  data: function(){
    return {
      items: [],
      cursor: {
        fields: {
          label: '',
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

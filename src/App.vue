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
      <Cards :cursor="cursor" />
    </section>
  </div>

  <Footer :cursor="cursor" />

</template>

<script>
import Link from './components/Link.vue'
import Cards from './components/Cards.vue'
import Hero from './components/Hero.vue'
import Breadcrumb from './components/Breadcrumb.vue'

import Footer from './components/Footer.vue'

export default {
  components: {
    Link, Cards, Hero, Breadcrumb, Footer
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

<template>
  <Hero />
  <Breadcrumb :cursor="cursor" />
  <div class="hg">
    <menu class="hg__u hg__u--qtr menu">    
      <Tree :items="items" />
    </menu>
    <section class="hg__u hg__u--3-qtrs content"> 
      <Cards :cursor="cursor" />
    </section>
  </div>
  <Footer />
</template>

<script>

import Hero from './components/Hero.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Tree from './components/Tree.vue'
import Cards from './components/Cards.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Cards, Hero, Breadcrumb, Footer, Tree
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
    this.update();          
  },
  methods: {
    update: function(){
      this.cursor = this.$categoryIndex[this.$route.fullPath];
    },
    selected: function(){
        let as = document.querySelectorAll('.js-link');
        for(let i = 0; i < as.length; i++){
          as[i].classList.remove('js-selected');
        }
        document.getElementById(this.cursor.sys.id).classList.add('js-selected');
    }
  },
  watch: {
    $route(to, from) {
      to, from;      
        this.update();    
        this.selected();      
    }
  }
}
</script>


<style lang="scss">
  
  @import "./scss/_vars.scss";
  @import "./scss/_globals.scss";
  @import "./scss/_pill.scss";
  @import "./scss/_grid.scss";  
   
  .section{
    padding: $gutter;
    &--green{      
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
    &--gap{
      gap: $space;
    }
  }

  .content{     
    background: #E2F2DA;
  }

</style>

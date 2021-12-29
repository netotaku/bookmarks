<template>
  
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
  name: 'Menu',
  components: {
    Tree
  },
  data: function(){
    return {
      items: [],
      cursor: []
    }
  },
  mounted: function(){
    this.items = this.$categoryTree;
  },
  watch: {
    $route(to, from) {
      to, from;      
        console.log('changed')
    }
  },  
}
</script>


<style lang="scss">
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: Tahoma;
}
html{
  font-size: 1em;
  line-height: 1.6;
}
.menu{
  border-top: solid 1px #ccc;
  a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    text-decoration: none;
    border-bottom: solid 1px #ccc;

    // color: #fff;    
    &:hover{   
      span{
        text-decoration: underline;
      }           
    }
  }  
  li{
    a{
      // background: #377D14; 
    }
    li{
      ul{
          display: none;
        }
        &:hover{
          > ul{
            display: block;
          }
        }
      a{
        // background: #52B91E; 
      }
      li{

        a{          
          //background: #BBED30; 
          // color: #377D14; 
        }
        li{
          a{                 
            // background: #EFF5A9;             
          }
          li{
            a{
              // background: #F1F5D9; 
            }
          }
        }
      }
    }
  } 
}
.section{
  padding: 8px 16px;
}
</style>

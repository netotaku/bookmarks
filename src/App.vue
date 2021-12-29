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

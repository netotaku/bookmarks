<template>

  <section class="section">
    <router-view
      :items="items"
    />
  </section>
  
  <menu class="menu">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
          <ul>
              <li v-for="item in items" :key="item.sys.id">
                  <Tree 
                    :slug="item.fields.slug"
                    :label="item.fields.label"
                    :children="item.fields.categories"
                    :path="item.fields.path"
                    :trail="crumb(item.fields.path)"
                    :count="0"></Tree>
              </li>
          </ul>
      </li>
    </ul>
  </menu>
    
  

</template>

<script>
import * as Contentful from 'contentful'
import Tree from './components/Tree.vue'

let contentful = Contentful.createClient({
    space: '1p0ns3osrnp9',
    accessToken: 'NX99wR6EKWoFP1RMu8E_dCkIdV7a8ax0An2RuaNu54Y',
})

export default {
  name: 'Menu',
  components: {
    Tree
  },
  data: function(){
    return {
      items: []
    }
  },
  mounted: function(){

    contentful.getEntries({
      "content_type": "category",
      "access_token": "NX99wR6EKWoFP1RMu8E_dCkIdV7a8ax0An2RuaNu54Y",
      "fields.slug": "index",
      "include": 10
    }).then((response) => {
      this.parse(response.items[0], []);
      this.items = response.items;             
    });

  },
  methods: {
    parse: function (node, path) {
      if ( !path )
        path = [];
      if (node) {
        path.push(node)
      }      
      node.fields.path = path;
      if (node.fields.categories) {
        node.fields.categories.forEach((item) => {
          this.parse(item, path.slice());
        });
      }
    }
  }
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
}
.menu{
  border-top: solid 1px #ccc;
  a{
    display: flex;
    justify-content: space-between;
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
      a{
        // background: #52B91E; 
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

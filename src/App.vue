<template>
  
  <menu>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
          <ul>
              <li v-for="item in items" :key="item.sys.id">
                  <Tree 
                    :slug="item.fields.slug"
                    :label="item.fields.label"
                    :children="item.fields.categories"></Tree>
              </li>
          </ul>
      </li>
    </ul>
  </menu>
    
  <router-view/>

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
      content_type: "category",
      access_token: "NX99wR6EKWoFP1RMu8E_dCkIdV7a8ax0An2RuaNu54Y",
      "fields.slug": "index",
      include: 10
    }).then((response) => {
        this.items = response.items;
        console.log(this.items.length);
    })
  }
}
</script>


<style lang="scss">
// *{
//   margin: 0px;
//   padding: 0px;
//   box-sizing: border-box;
// }
html{
  font-size: 1em;
}
</style>

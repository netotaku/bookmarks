<template>
    <h2>Category Content</h2>
    <div v-if="items.length > 0">
      items arrived there are {{ items.length }} of them {{ items[0].fields.label }}
    </div>
</template>

<script>

export default {
  name: 'Category', 
  // data: function(){
  //   return {
  //     items
  //   }
  // }, 
  props: [
    'items'
  ],  
  mounted: function(){
    this.update();
  },
  methods: {
    update: function(){
      this.parse(this.items[0]);
    },
    parse: function (node) {   
      console.log('NODE: ', node);
      //console.log(node.fields.path)   
      // if (node.fields.categories) {
      //   node.fields.categories.forEach((item) => {
      //     this.parse(item);
      //   });
      // }
    }
  },
  watch: {
    $route(to, from) {
      to, from;      
      this.update();
    }
  },
}
</script>
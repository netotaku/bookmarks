<template>
    <h2>Category Content</h2>
</template>

<script>

export default {
  name: 'Category',  
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
    parse: function(){

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
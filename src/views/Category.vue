<template>
    <h2>Category Content</h2>
</template>

<script>
// import * as Contentful from 'contentful'

// let contentful = Contentful.createClient({
//     space: '1p0ns3osrnp9',
//     accessToken: 'NX99wR6EKWoFP1RMu8E_dCkIdV7a8ax0An2RuaNu54Y',
// })

export default {
  name: 'Category',
  param: {
        slug: ''
  },  
  mounted: function(){
        console.log(this.$route.params.slug);
  },
  watch: {
    $route(to, from) {
      to, from;
      console.log(this.$route.params.slug);
    }
  },
}
</script>
<template>
    <footer class="footer">{{ cursor.fields.label }}</footer>
</template>
<script>
export default {
    props: ['cursor'],
    watch: {
    $route(to, from) {
      to, from;      
       // console.log(this.cursor.fields);
    }
  }
}
</script>

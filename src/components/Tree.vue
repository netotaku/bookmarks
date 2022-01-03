<template>
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
</template>

<script>
import Link from './Link.vue'
export default {
    props: ['items'],
    components: {
        Link
    }
}
</script>

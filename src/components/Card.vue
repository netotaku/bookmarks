<template>
    <div class="card">        
        <div class="card__link">
            <a class="" target="_blank" :href="link.fields.url">{{ link.fields.url }}</a></div>

        <div class="card__data">
            <i class="fas fa-square"></i> {{ link.sys.id }}</div>
        
        <div class="card__info">
            {{ URLdata.title }} {{ URLdata.description }} </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'card',
    props: [
        'link'
    ],
    data: function(){
        return {
            URLdata: {                
                title: '',
                description: '',
                image: ''                
            }
        }
    },
    mounted: function(){          
        if(this.$linkDataCache[this.link.sys.id]){
            this.URLdata = this.$linkDataCache[this.link.sys.id];        
        } else {
            axios.get(this.api(this.link.fields.url)).then((response) => {
                this.$linkDataCache[this.link.sys.id] = response.data;
                this.URLdata = response.data;        
            });
        }
    },
    methods: {
        api: function(url){
            let api = 'https://' + ((window.location.href.indexOf('localhost') > 0) ? 'scrapeapi.ddev.site' : 'thawing-river-34341.herokuapp.com') + '/?url=' + encodeURIComponent(url);            
            return api;
        }
    }
}
</script>

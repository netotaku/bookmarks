<template>
    <div class="card">        
        <div class="card__link">
            <a target="_blank" :href="link.fields.url">{{ link.fields.url }}</a></div>

        <div class="card__data">
            <i :class="icon(link.fields.url)"></i> {{ link.sys.id }}</div>
        
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
        
        // this.is_spotify(this.link.fields.url);
                
        // if(this.$linkDataCache[this.link.sys.id]){
        //     this.URLdata = this.$linkDataCache[this.link.sys.id];        
        // } else {
        //     axios.get(this.api(this.link.fields.url)).then((response) => {
        //         this.$linkDataCache[this.link.sys.id] = response.data;
        //         this.URLdata = response.data;        
        //     });
        // }

    },
    methods: {
        api: function(url){
            let api = 'https://' + ((window.location.href.indexOf('localhost') > 0) ? 'scrapeapi.ddev.site' : 'thawing-river-34341.herokuapp.com') + '/?url=' + encodeURIComponent(url);            
            return api;
        },
        icon: function(url){
            
            let cls = 'fas fa-file';

            let urlData = new URL(url);
            
            if(urlData.host.indexOf('twitter.com') > -1){                
                cls = "fab fa-twitter";
            }

            if(urlData.host.indexOf('instagram.com') > -1){                
                cls = "fab fa-instagram";
            }

            if(urlData.host.indexOf('t.me') > -1){                
                cls = "fab fa-telegram-plane";
            }  
            
            if(urlData.host.indexOf('github') > -1){                
                cls = "fab fa-github-alt";
            } 
            
            if(urlData.host.indexOf('mixcloud.com') > -1){                
                cls = "fab fa-mixcloud";
            } 
            
            if(urlData.host.indexOf('strava.com') > -1){                
                cls = "fab fa-strava";
            }   
            
            if(urlData.host.indexOf('linkedin.com') > -1){                
                cls = "fab fa-linkedin-in";
            }     
            
            if(urlData.host.indexOf('soundcloud.com') > -1){                
                cls = "fab fa-soundcloud";
            }  
            
            if(urlData.host.indexOf('youtu') > -1){                
                cls = "fab fa-youtube";
            }   
            
            if(urlData.host.indexOf('spotify.com') > -1){                
                cls = "fab fa-spotify";
            }   
            
            if(urlData.host.indexOf('amazon.co.uk') > -1){                
                cls = "fab fa-amazon";
            }               

            
            return cls;
        }
    }
}
</script>

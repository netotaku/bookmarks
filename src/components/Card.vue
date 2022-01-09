<template>

    <div class="card">    

        <iframe frameborder="0" class="card__embed" :class="modifier" v-if="embed" :src="embed"></iframe>

        <div class="card__link">
            <a target="_blank" :href="link.fields.url">
                {{ link.fields.url }}</a>
        </div>   
        <div class="card__data">
            <div class="card__data__icon">
                <i :class="icon"></i> 
            </div>
            <span class="card__data__id">{{ link.sys.id }}</span>
        </div>     
    </div>

</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
export default {
    name: 'card',
    data: function(){
        return {
            embed: null, 
            icon: 'fas fa-file',
            modifier: ''
        }
    },
    props: [
        'link'
    ],
    components: {
        axios
    },
    updated: function(){
        this.info(this.link.fields.url);
    },
    mounted: function(){
        this.info(this.link.fields.url);
    },
    methods: {
        info: function(url){            
            
            let urlData = new URL(url);
            
            if(urlData.host.indexOf('twitter.com') > -1){                
                this.icon = "fab fa-twitter";
                this.modifier = "card__embed--twitter";
            }

            if(urlData.host.indexOf('instagram.com') > -1){                
                this.icon  = "fab fa-instagram";
                this.modifier = "card__embed--instagram";
            }

            if(urlData.host.indexOf('t.me') > -1){                
                this.icon = "fab fa-telegram-plane";
                this.modifier = "card__embed--telegram";
            }  
            
            if(urlData.host.indexOf('github') > -1){                
                this.icon = "fab fa-github-alt";
                this.modifier = "card__embed--github";
            } 
            
            if(urlData.host.indexOf('mixcloud.com') > -1){                  
                this.embed = 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&mini=0&hide_artwork=1&feed=' + encodeURIComponent(urlData.pathname);                                
                this.icon = "fab fa-mixcloud";
                this.modifier = "card__embed--mixcloud";
            } 
            
            if(urlData.host.indexOf('strava.com') > -1){                
                this.icon = "fab fa-strava";
                this.modifier = "card__embed--strava";
            }   
            
            if(urlData.host.indexOf('linkedin.com') > -1){                
                this.icon = "fab fa-linkedin-in";
                this.modifier = "card__embed--linkedin";
            }     
            
            if(urlData.host.indexOf('soundcloud.com') > -1){                                  
                let api = "http://soundcloud.com/oembed?format=js&url=" + url + "&iframe=true";
                            
                axios
                    .get(api)
                    .then((response) => {
                        let r = response.data;
                        r = r.substring(1,r.length-2);
                        // let iframe = document.createElement(JSON.parse(r).html)// console.log(r);
                        let ifr = JSON.parse(r).html.match(/src\s*=\s*"([^"]+)"/g)[0];
                            ifr = ifr.substring(5,ifr.length-1);
                        this.embed = ifr; // 'https://w.soundcloud.com/player/?url=' + encodeURIComponent(ifr.substring(5,ifr.length-1)) + '&color=%23ff5500&inverse=false&auto_play=false&show_user=true';
                        console.log(this.embed);

                        // console.log();
                    })

                // console.log(this.embed);
                
                this.icon = "fab fa-soundcloud";
                this.modifier = "card__embed--soundcloud";
            }  
            
            if(urlData.host.indexOf('youtu') > -1){                
                this.icon = "fab fa-youtube";
                this.modifier = "card__embed--youtube";
            }   
            
            if(urlData.host.indexOf('spotify.com') > -1){                       
                this.embed = 'https://open.spotify.com/embed/playlist/' + urlData.pathname.split('/')[2] + '?theme=0';                
                this.icon = "fab fa-spotify";
                this.modifier = "card__embed--spotify";
            }   
            
            if(urlData.host.indexOf('amazon.co.uk') > -1){                
                this.icon = "fab fa-amazon";
                this.modifier = "card__embed--amazon";
            }               
        }
    }
}
</script>

<style lang="scss">
    $grey: rgba(0,0,0,.3);
    $border: solid 1px rgba(0,0,0,.3);
    $padding: 8px 12px;
    .card{
        border: $border;
        border-radius: 4px;
        // height: 100%;

        display: flex;
        flex-direction: column;
        align-content: space-between;

        overflow: hidden;

        &__embed{
            display: block;
            width: 100%;
            height: 60px;
            border-bottom: $border;
            &--spotify{
                height: 80px;
            }
            &--soundcloud{
                height: 300px;
            }
        }

        &__link{
            a{
                display: block;
                padding: $padding;
                font-size: 1.2em;
                text-decoration: none;
                word-break: break-word;
                &:hover{
                    text-decoration: underline;
                }
            }       
        }
        &__data{
            margin-top: auto;
            align-self: flex-end;
            border-top: $border;
            display: flex;
            align-items: center;

            width: 100%;

            color: $grey;

            // 

            &__icon{                
                width: 40px;
                text-align: center;
                border-right: $border;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &__id{
                padding: $padding;
                font-family: monospace;
            }
        }
    }
</style>
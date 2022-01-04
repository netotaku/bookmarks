<template>
    <div class="card">    
        <div class="card__data">
            <i :class="icon(link.fields.url)"></i> {{ link.sys.id }}</div>

        <div class="card__link">
            <a target="_blank" :href="link.fields.url">{{ link.fields.url }}</a></div>        
    </div>
</template>

<script>
export default {
    name: 'card',
    props: [
        'link'
    ],
    methods: {
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

<style lang="scss">
    .card{
        &__link{
            a{
                font-size: 1.2em;
                text-decoration: none;
                word-break: break-word;
                &:hover{
                    text-decoration: underline;
                }
            }       
        }
        &__data{
            color: rgba(0,0,0,.3);
            font-family: monospace;
        }
    }
</style>
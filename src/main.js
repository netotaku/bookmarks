import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mixin({
        methods:{
            crumb: function(path){
                let bread = [];
                for(let crumb in path){        
                    bread.push(path[crumb].fields.slug);
                }
                return bread;
            }
        }
    })
    .mount('#app');
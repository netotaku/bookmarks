import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as Contentful from 'contentful'

let categoryIndex = {};

function crumb(path){
    let bread = [];
    for(let crumb in path){        
        bread.push(path[crumb].fields.slug);
    }
    return bread;
}

function parse(node, path) {
    
    if ( !path )
      path = [];
    if (node) {
      path.push(node)
    }  

    node.fields.path = path;
    // node.fields.trail = crumb(path);

    let id = crumb(path);
        id.shift();

    node.fields.trail = id;
    
    categoryIndex['/' + id.join('/')] = node;

    if (node.fields.categories) {
      node.fields.categories.forEach((item) => {
        parse(item, path.slice());
      });
    }
}

////////

let contentful = Contentful.createClient({
    space: '1p0ns3osrnp9',
    accessToken: 'NX99wR6EKWoFP1RMu8E_dCkIdV7a8ax0An2RuaNu54Y',
})

contentful.getEntries({
    "content_type": "category",
    "access_token": "NX99wR6EKWoFP1RMu8E_dCkIdV7a8ax0An2RuaNu54Y",
    "fields.slug": "index",
    "include": 10
}).then((response) => {

    parse(response.items[0], []);

    console.log(response.items);

    const   app = createApp(App);
            app.use(router);
            app.mixin({
                methods:{
                    crumb: function(path){
                        let bread = [];
                        for(let crumb in path){        
                            bread.push(path[crumb].fields.slug);
                        }
                        return bread;
                    }
                }
            });
            app.config.globalProperties.$categoryTree = response.items;
            app.config.globalProperties.$categoryIndex = categoryIndex;
            app.mount('#app');

});



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as Contentful from 'contentful'
import VueContentfulApi from 'vue-contentful-api'

let contentful = Contentful.createClient({
    space: 'SPACE-ID',
    accessToken: 'ACCESS-TOKEN',
})

createApp(App).use(router).mount('#app')
Vue.use(VueContentfulApi, contentful)

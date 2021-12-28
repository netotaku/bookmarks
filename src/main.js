import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Tree from './components/Tree.vue'

createApp(App)
    .use(router, Tree)
    .mount('#app');
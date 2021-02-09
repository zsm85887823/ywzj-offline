import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Layout, Menu, Button, Row, Col } from 'ant-design-vue'

const app = createApp(App)

app.use(store)
    .use(router)
    .use(Layout)
    .use(Menu)
    .use(Button)
    .use(Row)
    .use(Col)
    .mount('#app')

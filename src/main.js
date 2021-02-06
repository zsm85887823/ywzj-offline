import { createApp } from 'vue'
import App from './App.vue'
import { Input, Button, Layout, Menu, Breadcrumb, Row, Col, Modal } from 'ant-design-vue'
import router from '@/router'
import store from '@/store'

const app = createApp(App)
app.use(Input)
   .use(Layout)
   .use(Button)
   .use(Breadcrumb)
   .use(Menu)
   .use(Row)
   .use(Col)
   .use(Modal)
   .use(router)
   .use(store)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import { Input, Button,Layout, Menu, Breadcrumb , Row, Col } from 'ant-design-vue'


const app = createApp(App)
app.use(Input)
   .use(Layout)
   .use(Button)
   .use(Breadcrumb)
   .use(Menu)
   .use(Row)
   .use(Col)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Layout, Menu, Button, Row, Col, Modal, Divider, Form, Input, message, Table, select, popover,divider } from 'ant-design-vue'

const app = createApp(App)

app.use(store)
    .use(router)
    .use(Layout)
    .use(Menu)
    .use(Button)
    .use(Row)
    .use(Col)
    .use(Modal)
    .use(Divider)
    .use(Form)
    .use(Input)
    .use(Table)
    .use(divider)
    .use(select)
    .use(popover)
    .use(message)
    .mount('#app')

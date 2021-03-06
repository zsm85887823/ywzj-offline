import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Layout, Menu, Button, Row, Col, Modal, Divider, Form, Input, message, Table, Select, Popover, Pagination, Checkbox, Collapse, Radio ,InputNumber,List,Card} from 'ant-design-vue'
const app = createApp(App)
document.title = "永无止境PRO+"
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
    .use(Select)
    .use(Pagination)
    .use(InputNumber)
    .use(List)
    .use(Card)
    .use(Radio)
    .use(Popover)
    .use(Checkbox)
    .use(Collapse)
    .use(message)
    .mount('#app')

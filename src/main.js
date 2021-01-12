import { createApp } from 'vue'
import {
  Button,
  Upload,
  Tooltip,
  Select,
  Tabs,
  Card,
  InputNumber,
  message,
  Input,
  Empty,
  Switch,
  Radio
} from 'ant-design-vue'

import App from './App.vue'
import 'minireset.css'

const app = createApp(App)
// 全局挂载提醒函数
app.config.globalProperties.message = message

// 注册组件
app
  .use(Button)
  .use(Upload)
  .use(Tooltip)
  .use(Radio)
  .use(Select)
  .use(Tabs)
  .use(Card)
  .use(Input)
  .use(Empty)
  .use(Switch)
  .use(InputNumber)

app.mount('#app')

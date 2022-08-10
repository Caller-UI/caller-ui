import { createApp } from 'vue'
import './style.css'
import './views/style/docTheme.less'
import '@/packages/style/theme.less'
import CUI from './packages/index'
// import CUI from 'caller-ui'
import App from './App.vue'
import router from '@/router'
// import 'caller-ui/dist/style.css'
// import '../node_modules/caller-ui/dist/style.css'
const app = createApp(App)
app.use(CUI)
app.use(router)
app.mount('#app')

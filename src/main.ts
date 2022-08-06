import { createApp } from 'vue'
import './style.css'
import CUI from '../packages/index'
// import CUI from 'caller-ui'
import App from './App.vue'
// import 'caller-ui/dist/style.css'
// import '../node_modules/caller-ui/dist/style.css'
const app = createApp(App)
app.use(CUI)
app.mount('#app')

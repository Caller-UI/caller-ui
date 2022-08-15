import { createApp } from 'vue'
import './style.css'
import './views/style/docTheme.less'
import '#/packages/style/theme.less'
import CUI from '#/packages/index'
// import CUI from 'caller-ui'
import App from './App.vue'
import router from '@/router'
// import 'caller-ui/dist/style.css'
// import '../node_modules/caller-ui/dist/style.css'

// import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/styles/atom-one-light.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import ShowBox from '@/components/ShowBox/ShowBox.vue'

const app = createApp(App)
app.use(hljsVuePlugin)
app.use(CUI)
app.use(router)
app.component('show-box', ShowBox)
app.mount('#app')

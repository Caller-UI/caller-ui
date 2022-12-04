import cButton from './button/index'
import cIcon from './icon/index'
import cSpace from './space/index'
import cConfigProvider from './ConfigProvider/index'
import cAlert from './alert/index'
import { App } from 'vue'
// const install = (app: any) => {
//   app.use(cButton)
// }
// const CUI = {
//   install
// }

// export { cButton } //按需引入

// export default CUI

const components = [
  { name: 'c-button', data: cButton },
  { name: 'c-icon', data: cIcon },
  { name: 'c-space', data: cSpace },
  { name: 'c-configProvider', data: cConfigProvider },
  { name: 'c-alert', data: cAlert }
]
const CUI = {
  install(vue: App<Element>) {
    components.forEach((component) => {
      vue.component(component.name, component.data)
    })
  }
}
export { cButton } // 按需引入
export { cIcon }
export { cSpace }
export { cConfigProvider }
export { cAlert }
export default CUI

import cButton from './button/index'
import cIcon from './icon/index'
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
  { name: 'c-icon', data: cIcon }
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
export default CUI

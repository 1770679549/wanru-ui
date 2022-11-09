import { App } from 'vue'
import verifyCode from './src/verifyCode.vue'
 
// 定义 install 方法， App 作为参数
verifyCode.install = (app: App): void => {
    app.component(verifyCode.name, verifyCode)
}
 
export default verifyCode
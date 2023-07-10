import { App } from 'vue'
import Theme from 'vitepress/theme'
import '../../public/css/customStyle.css' // 自定义的主题色文件

export default {
	...Theme,
	enhanceApp({ app }: { app: App }) {
		// app.use(VcComponent) // 进行组件注册，这样我们可以直接在 markdown 中使用组件啦！
	},
}

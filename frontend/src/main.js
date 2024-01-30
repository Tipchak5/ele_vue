import { createApp } from 'vue';
import App from './App.vue';
import './assets/global.less';
import components from './components/global';
import Router from './router/index';
import Antd from 'ant-design-vue';

const app = createApp(App);
app.config.productionTip = false;

// components
for (const i in components) {
	app.component(i, components[i]);
}

app.use(Router).use(Antd).mount('#app');

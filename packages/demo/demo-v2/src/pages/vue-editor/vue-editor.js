/**
 * Created by Liu.Jun on 2019/9/29 15:29.
 */
import './public-path.js';

// bootstrap
import 'demo-common/bootstrap.js';
import Vue from 'vue';
import elementUI from 'demo-common/components/ElementUi/index.js';

import './vue-editor.css';
import router from './router';
import routerGuards from './router/guards';
import App from './App';

let instance = null;

function render(props = {}) {
    const {
        container
    } = props;

    // Ui
    Vue.use(elementUI);

    // 添加路由守卫
    routerGuards(router); // 路由守卫

    instance = new Vue({
        router,
        render: h => h(App),
    }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
    console.log('[vue] props from main framework', props);
    render(props);
}
export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
}



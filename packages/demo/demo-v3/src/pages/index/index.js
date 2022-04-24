/**
 * Created by Liu.Jun on 2020/5/13 15:52.
 */
// 微前端配置
import './public-path';

import 'demo-common/bootstrap.js';
import {
    createApp
} from 'vue';
import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
import ElementPlus from 'demo-common/components/ElementPlus/index.js';

import routes from './routes';

import App from './App';

import './style.css';

let instance = null;

function render(props = {}) {
    const {
        container
    } = props;


    // create router
    const router = createRouter({
        history: createWebHashHistory(),
        routes,
    });

    // create app
    instance = createApp(App);

    // use router
    instance.use(router);

    // use ui lib
    instance.use(ElementPlus);

    // mount
    instance.mount(container ? container.querySelector('#app') : '#app');

    instance.config.unwrapInjectedRef = true;

    

}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
    window.app1 = instance;
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

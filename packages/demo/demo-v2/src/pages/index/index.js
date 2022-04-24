/**
 * Created by Liu.Jun on 2020/5/13 15:52.
 */
import './public-path';

import 'demo-common/bootstrap.js';
import Vue from 'vue';
import VueRouter from 'VueRouter';
import elementUI from 'demo-common/components/ElementUi/index.js';

import routes from './routes';

import App from './App';

import './style.css';

let instance = null;

function render(props = {}) {
    const {
        container
    } = props;


    Vue.use(VueRouter);

    // Ui
    Vue.use(elementUI);

    instance = new Vue({
        router: new VueRouter({
            mode: 'hash',
            routes,
            scrollBehavior() {
                return {
                    x: 0,
                    y: 0
                };
            }
        }),
        render: h => h(App)
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

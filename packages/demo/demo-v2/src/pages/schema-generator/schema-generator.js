/**
 * Created by Liu.Jun on 2020/10/24 9:21 下午.
 */
import './public-path.js';

import 'demo-common/bootstrap.js';

import Vue from 'vue';
import elementUI from 'demo-common/components/ElementUi/index.js';
import router from './router';
import App from './App';

let instance = null;

function render(props = {}) {
    const {
        container
    } = props;

    // Ui
    Vue.use(elementUI);

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
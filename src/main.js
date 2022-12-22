import {createApp} from 'vue'
import App from './App.vue'
import components from '@/Components/UI';
import store from "@/Components/Store";
import router from "@/Router/router";
import Vue from 'vue'

const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)//глобальная регистрация компонентов
})

app.use(store).use(router).mount('#app')


Vue.directive('phone', {
    bind(el) {
        el.oninput = function (e) {
            if (!e.isTrusted) {
                return
            }

            const x = this.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/)

            if (!x[2] && x[1] !== '') {
                this.value = x[1] === '8' ? x[1] : '8' + x[1]
            } else {
                this.value = !x[3] ? x[1] + x[2] : x[1] + '(' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '')
            }
        }
    },
})
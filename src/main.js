import { createApp } from 'vue'
import App from  './App.vue'
import components from '@/Components/UI';

const app = createApp(App)
components.forEach(component =>{
    app.component(component.name, component)//глобальная регистрация компонентов
})

app.mount('#app')
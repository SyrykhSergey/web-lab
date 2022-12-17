import { createApp } from 'vue'
import App from  './App.vue'
import components from '@/Components/UI';
import store from "@/Components/Store";

const app = createApp(App)
components.forEach(component =>{
    app.component(component.name, component)//глобальная регистрация компонентов
})

app.use(store).mount('#app')
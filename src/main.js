import { createApp } from 'vue';
import App from './App.vue';
import {components} from "@/components/UI";
import router from "@/router/router";
import VIntersection from "@/directives/VIntersection";
import directives from "@/directives";
const app = createApp(App);
import store from '@/store';

components.forEach(component => {
    app.component(component.name,component);
});

directives.forEach(directive => {
    app.directive(directive.name,directive);
})


app
    .use(router)
    .use(store)
    .mount('#app');

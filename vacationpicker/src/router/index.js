import {createRouter, createWebHashHistory} from "vue-router";
import VacationPicker from "@/components/VacationPicker";
import AddCountry from "@/components/AddCountry";

const routes = [
    {
        path: '/',
        name: 'home',
        component: VacationPicker
    },
    {
        path: 'add',
        name: 'add',
        component: AddCountry
    },

]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router;
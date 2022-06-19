import {createRouter, createWebHashHistory} from "vue-router";
import VacationPicker from "@/components/VacationPicker";
import AddCountry from "@/components/AddCountry";
import CountryDetail from "@/components/CountryDetail";


/*const routes = {
    '/': VacationPicker,
    '/add' : AddCountry
}*/

const routes = [
    {
        path: '/',
        name: 'home',
        component: VacationPicker
    },
    {
        path: '/add',
        name: 'add',
        component: AddCountry
    },
    {
        path: '/detail',
        name: 'detail',
        component: CountryDetail
    },


]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router;
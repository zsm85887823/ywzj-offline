import { routes } from "@/router";

const state = {
    routes: routes[0].children
}
const mutations = {
    SET_ROUTES: (state, routes) => {
        state.routes = routes;
    }
}
const actions = {
    
}

export default { state, mutations, actions }
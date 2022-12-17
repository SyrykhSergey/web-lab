import {createStore} from "vuex";
import axios from "axios";

export default createStore({
    state:{
        catalog: []
    },
    getters:{
        catalogPage(state){
            return state.catalog;
        }
    },
    actions:{
        async fetchCatalog(ctx){
            try {
                const response = await axios.get('https://food-delivery.kreosoft.ru/api/dish?categories=Wok&vegetarian=false&sorting=NameAsc&page=1');
                const catalogData = response.data;
                ctx.commit("updateCatalogPage", catalogData)
            } catch (e) {
                alert('Error')
            }


        }
    },
    mutations:{
        updateCatalogPage(state, catalog){
            state.catalog = catalog
        }

    }
})
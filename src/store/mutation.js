import * as types from './type'

const mutations = {
    [types.ADD_ITEM](state,data){
        state.home.push(data)
        localStorage.setItem("home",JSON.stringify(state.home))
    },
    [types.SET_DONE](state,data){
        state.item.push(data);
        localStorage.setItem("item",JSON.stringify(state.item))
    }
}

export default mutations
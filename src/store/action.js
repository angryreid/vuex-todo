import * as types from './type'

const actions = {
    addItem({commit},data){
        commit(types.ADD_ITEM,data)
    },
    setDone({commit},data){
        commit(types.SET_DONE,data)
    }
}

export default actions
//创建Vuex中的store
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

const actions = {
    text(context,value) {
        context.commit('TEXT',value);
        console.log(context);
    },
};
const mutations = {
    TEXT(state,value) {
        state.n = state.n + value;
        console.log("TEXT被调用了");
    },
};
const state = {
    n: 1,
};

export default new Vuex.Store({
    actions, //简写形式
    mutations,
    state,
});

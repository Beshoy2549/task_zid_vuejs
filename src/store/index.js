import Vue from "vue";
import Vuex from "vuex";
import jsonBanks from "../json/db.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Banks : jsonBanks,
    list_of_banks: ["البنك الأهلي التجاري" , "ساب" , "البنك السعودي الفرنسي" , "البنك الأول" , "البنك السعودي للاستثمار" ,"البنك العربي الوطني"]
  },
  getters:{
    Banks(state) {
      return state.Banks ;
    },
    list_of_banks(state) {
      return state.list_of_banks
    },
  },
  mutations: {
    ADD_BANK(state ,item ) {
      state.Banks.unshift(item)
    },
    DELETE_BANK(state , item) {
      state.Banks.splice(item , 1)
    },
  },
  actions: {

  },
  modules: {}
});

/* eslint-disable */
import { createStore } from "vuex";
import moduloCampeonato from "./modulos/campeonato";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

export const store = createStore({
  state: {
    valor: 10,
    nombre: "Federico",
    comentarios: "Comentarios desde el store",
  },
  getters,
  mutations,
  actions,
  modules: {
    moduloCampeonato,
  },
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      { index: 0, msg: "做一顿油焖大虾", done: true },
      { index: 1, msg: "做一顿糖醋小排", done: false },
      { index: 2, msg: "去见对方的朋友", done: false },
      { index: 3, msg: "一起看一场电影", done: false },
    ],
    snackbar: {
      show: false,
      text: "",
    },
  },
  mutations: {
    addTask(state, newTaskMsg) {
      let newTaskItem = {
        index: Date.now(),
        msg: newTaskMsg,
        done: false,
      };

      state.items.push(newTaskItem);
    },
    doneTask(state, index) {
      let task = state.items.filter((task) => task.index === index)[0];
      task.done = !task.done;
    },
    deleteTask(state, index) {
      state.items = state.items.filter((task) => task.index != index);
    },
    updateItem(state, payload) {
      let task = state.items.filter((task) => task.index === payload.index)[0];
      task.msg = payload.msg;
    },
    snackBarAction(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
    hideSnackBar(state) {
      state.snackbar.show = false;
    },
  },
  actions: {
    addTask({ commit }, newTaskMsg) {
      commit("addTask", newTaskMsg);
      commit("snackBarAction", ` add new Task ${newTaskMsg}`);
    },
    doneTask({ commit }, item) {
      commit("doneTask", item.index);
      commit("snackBarAction", `Task ${item.msg} Done!`);
    },
    deleteTask({ commit }, item) {
      commit("deleteTask", item.index);
      commit("snackBarAction", `Delete Task ${item.msg}`);
    },
    updateItem({ commit }, item) {
      commit("updateItem", item);
      commit("snackBarAction", `Edit Task ${item.msg}`);
    },
  },
  modules: {},
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: null,
    sorting: false,
    appTitle: process.env.VUE_APP_TITLE,
    items: [
      { index: 0, msg: "做一顿油焖大虾", done: true, dueDate: "2021-6-16" },
      { index: 1, msg: "做一顿糖醋小排", done: false, dueDate: "2021-6-17" },
      { index: 2, msg: "做一顿油焖大虾", done: false, dueDate: "2021-6-18" },
      { index: 3, msg: "做一顿糖醋小排", done: false },
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
        dueDate: null,
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
    saveDueDate(state, payload) {
      let task = state.items.filter((task) => task.index === payload.index)[0];
      task.dueDate = payload.dueDate;
    },
    setSearch(state, value) {
      state.search = value;
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

    toggleSorting(state) {
      state.sorting = !state.sorting;
    },
    setTasks(state, items) {
      state.items = items;
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
    saveDueDate({ commit }, item) {
      commit("saveDueDate", item);
      commit("snackBarAction", `Edit Task ${item.dueDate}`);
    },
  },
  getters: {
    taskFiltered(state) {
      return state.search
        ? state.items.filter((item) =>
            item.msg.includes(state.search.toLowerCase())
          )
        : state.items;
    },
  },
  modules: {},
});

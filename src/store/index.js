import Vue from "vue";
import Vuex from "vuex";
import { SingleNode, SinglyLinkedList } from "../Models/LinkedListed";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    node: {},
    LinkedList: new SinglyLinkedList()
  },
  mutations: {
    setup(state, payload) {
      state.LinkedList = payload.list;
      for (let i = 0; i < payload.nodes.length; i++) {
        state.LinkedList.push(payload.nodes[i]);
      }
    },
    next(state) {
      state.LinkedList.head = state.LinkedList.head.next;
    },
    pop(state) {
      let tempLink = state.LinkedList;
      tempLink.pop();
      state.LinkedList = tempLink;
    },
    push(state, nodeName) {
      let tempLink = state.LinkedList;
      tempLink.push(nodeName);
      state.LinkedList = tempLink;
    },
    unshift(state, nodeName) {
      let tempLink = state.LinkedList;
      tempLink.unshift(nodeName);
      state.LinkedList = tempLink;
    },
    shift(state) {
      let tempLink = state.LinkedList;
      tempLink.shift();
      state.LinkedList = tempLink;
    }
  },
  actions: {
    setup({ commit, dispatch }) {
      let node1 = "Texas";
      let node2 = "Japan";
      let node3 = "Triangle";
      let list = new SinglyLinkedList();
      let nodesArray = [node1, node2, node3];
      commit("setup", { list: list, nodes: nodesArray });
    },
    next({ commit, dispatch }) {
      commit("next");
    },
    pop({ commit, dispatch }) {
      commit("pop");
    },
    push({ commit, dispatch }, nodeName) {
      commit("push", nodeName);
    },
    unshift({ commit, dispatch }, nodeName) {
      commit("unshift", nodeName);
    },
    shift({ commit, dispatch }) {
      commit("shift");
    }
  },
  modules: {}
});

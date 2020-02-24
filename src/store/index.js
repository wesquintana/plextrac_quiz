import Vue from "vue";
import Vuex from "vuex";
import { SingleNode, SinglyLinkedList } from "../Models/LinkedListed";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    node: new SingleNode("Texas"),
    LinkedList: new SinglyLinkedList()
  },
  mutations: {},
  actions: {},
  modules: {}
});

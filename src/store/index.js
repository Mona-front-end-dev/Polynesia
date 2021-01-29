import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList:[
      {
       author:'Max',
       description:'Buy a basket',
       time: new Date('10-23-2020 13:56')
     },
     {
       author:'Peter',
       description:'Buy a pen',
       time:new Date('11-23-2020 18:40')
     },
     {
       author:'Sebastian',
       description:'Buy a mat',
       time: new Date('12-18-2020 14:23') 
     },
     {
       author:'Mona',
       description:'Buy fruits',
       time: new Date('10-12-2020 10:35')
     }
   ]
  },
  mutations: {
    addItem(state, toDoItem){
      state.todoList.unshift(toDoItem)
    },
    removeItem(state, todoItem) {
      const index = state.todoList.indexOf(todoItem);
      state.todoList.splice(index, 1);
    }
  }
})

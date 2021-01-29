<template>
  <div>
    <h1>Your Tasks</h1>
    <div v-if="list.length>0">
      <TodoItemBoxComponent 
      v-for="item in list"
      v-bind:key="item.description" 
      v-bind:todoItem="item"/>
    </div>
    <div class= "hooray" v-else>Hooray! There is no task to do. Have fun!
    </div>
  </div>
</template>

<script>
import TodoItemBoxComponent from './TodoItemBoxComponent.vue'

export default {
  components: {
    TodoItemBoxComponent
  },
  computed: {
    list() {
      return this.$store.state.todoList;
    }
  }
}
</script>

<style scoped>
.hooray {
  background-color: rgba(15, 22, 29, 0.904);
  border-radius: 10px;
  color: lightgray;
  padding: 30px;  
}
</style>


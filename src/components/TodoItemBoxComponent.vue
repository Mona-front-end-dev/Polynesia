<template>
  <div class="boxes-in-list card">
      <div>
      <h3>{{todoItem.author}}</h3>
      <p class="description">{{todoItem.description}}</p>
      <p class="time">{{generateUserFriendlyTimeFormat(new Date())}}</p>
      </div>
      <div>
      <button class="btn" @click="removeTodoItem" style="font-size:24px"></button>
      </div>
  </div>
</template>

<script>

export default {
  props: ["todoItem"],
  methods: {
    removeTodoItem() {
      this.$store.commit("removeItem", this.todoItem);
    },
    generateUserFriendlyTimeFormat(dateObject) {
      return dateObject.getFullYear() 
        + "/"
        + (dateObject.getMonth() + 1) 
        + "/"
        + dateObject.getDate() 
        + " " 
        + dateObject.getHours() 
        + ":"
        + dateObject.getMinutes();
    }
  }
}
</script>

<style scoped>
  .boxes-in-list {
    display: flex;
    justify-content: space-between;
    border: none;
  }

  .card {
    background-color: rgba(15, 22, 29, 0.9);
    border-radius: 10px;
    margin: 15px;
    color: #fff;
    padding: 30px;
    font-family: cursive;
  }

  button {
    background-image:url('../assets/delete-icon.svg');
    width: 30px;
    height: 30px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: contain;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .description {
    font-size: 18px;
    margin-top: 5px;
  }
  
  h3 {
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 5px;
  }
</style>
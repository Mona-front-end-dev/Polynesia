<template>
    <div>
        <h1>Add Task</h1>
        <form >
            <div class="flex input-group space-around">
                <label for="author">Author</label>
                <input class="input" type="author" v-model="author">
            </div>
            <div class="flex input-group space-around">
                <label for="description">Description</label>
                <textarea class="input" v-model="description" rows="4" cols="20"></textarea>
            </div>
            <div class="add-button flex" >
                <button @click.prevent.enter="addToList">Add to list</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {   
            author: '',
            description: ''
        }
    },
    methods: {
        addToList( ){
            if(!this.author || !this.description) {
                alert("You should fill the form");
                return;
            }
            const toDoItem = {
                author: this.author,
                description: this.description,
                time: new Date()
            }
            this.$store.commit('addItem', toDoItem)
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
    form {
        background-color: rgba(15, 22, 29, 0.904);
        border-radius: 10px;
        color: lightgray;
        padding: 30px;  
    }

    .flex {
        display: flex;
        justify-content: center;
    }

    .add-button button{
        font-weight: bold;
        border: 1px solid rgb(152, 158, 161);
        outline: none;
        border-radius: 5px;
        background: rgb(14, 112, 158);
        padding: 15px 20px;
        color: #fff;
        cursor: pointer;
        transition: 300ms;
    }

    .add-button button:hover {
        background: rgb(9, 91, 130);
    }

    .input-group {
        padding-bottom: 30px;
        text-align: left;
    }

    .input-group label {
        width: 100px;
        text-align: left;
    }

    .input {
        width: 150px;
        min-height: 30px;
        border: 1px solid rgb(6, 33, 49);
        outline: none;
        border-radius: 5px;
    }

    .space-around {
        justify-content: space-around;
    }
</style>
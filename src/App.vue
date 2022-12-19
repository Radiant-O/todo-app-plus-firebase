<template>
  <div class="rel-todo">

<div class="title has-text-centered">
  My Todo
</div>

<form @submit.prevent="addTodo">
  <div class="field is-grouped mb-5">
  <div class="control is-expanded">
    <input 
    v-model="newContent"
    class="input" 
    type="text" 
    placeholder="Enter Todo">
  </div>
  <div class="control">
    <button
    :disabled="!newContent"
    class="button is-info">
      Add
    </button>
  </div>
</div>
</form>

<div
v-for="todo in todos"
class="card mb-5"
:class="{'has-background-light' : todo.done}"
>
  <div class="card-content">
    <div class="content">

      <div class="columns is-mobile is-vcentered">
        <div class="column"
        :class="{'has-text-success line' : todo.done }"
        >
          {{todo.content}}
        </div>
        <div class="columnn is-5 has-text-right">
          <button 
          @click="toggleDone(todo.id)"
          class="button"
          :class="todo.done ? 'is-success' : 'islight' "
          >&check;</button>
      <button class="button is-danger ml-2"
      @click="deleteTodo(todo.id)">&cross;</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid';


// todos
const todos = ref([
  // {
  //   id: 'id1',
  //   content: 'Great are you God',
  //   done: true
  // },
  // {
  //   id: 'id1',
  //   content: 'Father of the whole Universe',
  //   done: false
  // }
])

const newContent = ref("")
// add todo
const addTodo = () => {
  const newTodo = {
    id: uuidv4(),
    content:newContent.value,
    done: false
  }
  todos.value.unshift(newTodo)
  newContent.value = ""
}

//delete todo
const deleteTodo = id => {
  todos.value = todos.value.filter(todo => todo.id != id)
}
//toggledone
const toggleDone = id => {
  const index =todos.value.findIndex(todo => todo.id === id)
  todos.value[index].done = !todos.value[index].done
}
</script>

<style>
@import 'bulma\css\bulma.min.css';

.rel-todo{
  max-width: 400px;
  margin: 0 auto;
  padding:20px ;
}
.line{
  text-decoration: line-through;
}
</style>
<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout>
        <ul v-if="todos && todos.length">
          <li :key="todo" v-for="todo of todos">
            <p><strong>{{todo.description}}</strong></p>
            <p>{{todo.done}}</p>
          </li>
        </ul>

        <ul v-if="errors && errors.length">
          <li :key="error" v-for="error of errors">
            {{error.message}}
          </li>
        </ul>
        </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      todos: [],
      errors: []
    }
  },

  // Fetches todos when the component is created.
  created () {
    axios
      .get(`https://todo-1cc4a.firebaseio.com/todo.json`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.todos = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/todos`)
    //   this.todos = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>
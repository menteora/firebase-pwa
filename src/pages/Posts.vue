<template>
    <v-layout column justify-center align-center>

        <v-flex xs12 md5>
            <div v-for="post in posts" :key="post.title">

                <v-card class="my-3" hover>
                    <v-card-media class="white--text" height="250px" :src="post.image">
                    </v-card-media>
                    <v-card-title primary-title>
                        <h3 class="headline mb-0">{{ post.title }}</h3>
                    </v-card-title>
                    <v-card-text class="subheading">
                        {{ post.description }}
                    </v-card-text>
                </v-card>

            </div>
        </v-flex>

    </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts: [],
      errors: []
    }
  },

  created () {
    axios
      .get(`https://blog-c4a3c.firebaseio.com/posts.json`)
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

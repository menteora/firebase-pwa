<template>
<v-app light>

  <v-navigation-drawer 
    fixed 
    temporary 
    :mini-variant="miniVariant" 
    :clipped="clipped" 
    v-model="drawer" 
    :disable-route-watcher="routeWatcher" 
    :enable-resize-watcher="resizeWatcher"
    app
  >
    <v-list>
      <v-list-tile 
        router 
        v-for="(item, i) in items" 
        :key="i" 
        :to="item.to" 
        exact
      >
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>

  <v-toolbar app clipped-left fixed>
    <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <!--<v-avatar :hidden="hiddenTitle" class="ml-3" size="32px">
      <img :hidden="hiddenTitle" src="~/assets/icons/favicon.png">
    </v-avatar>-->
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down" v-for="(item, i) in items" :key="i">
      <v-btn 
        exact 
        router 
        :to="item.to" 
        flat
      >
        <v-icon left v-html="item.icon"></v-icon>{{item.title}}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>

  <v-content>
    <router-view></router-view>
  </v-content>
  
</v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      miniVariant: false,
      routeWatcher: false,
      resizeWatcher: true,
      title: 'FirebasePwa',
      offsetTop: 0,
      offsetLimit: 250,
      hiddenTitle: true,
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: '/'
        },
        {
          title: 'Hello',
          icon: 'label',
          to: '/hello'
        }
      ]
    }
  }
}
</script>


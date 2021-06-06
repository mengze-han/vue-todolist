<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> 写给小杨 </v-list-item-title>
          <v-list-item-subtitle> yangke.xin </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="#fcb69f"
      dark
      src="https://picsum.photos/1920/1080?random"
      @click="drawer = !drawer"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>从记忆开始</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
      <snack-bar />
    </v-main>
  </v-app>
</template>

<script>
import SnackBar from "@/components/Shared/SnackBar";

export default {
  components: {
    SnackBar,
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: "meet", icon: "mdi-view-dashboard", to: "/meet" },
        { title: "Photos", icon: "mdi-image", to: "/" },
        { title: "About", icon: "mdi-help-box", to: "/about" },
      ],
      right: null,
    };
  },
};
</script>
©

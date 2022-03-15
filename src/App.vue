<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="768" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> 练手的CRUD </v-list-item-title>
          <v-list-item-subtitle> 练手的CRUD </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-img max-height="200" max-width="250" :src="avatar"></v-img>
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
      prominent
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-row>
          <v-toolbar-title class="text-h4 ml-4">{{
            $store.state.appTitle
          }}</v-toolbar-title>
        </v-row>
        <v-row>
          <live-date />
        </v-row>
      </v-container>

      <v-spacer></v-spacer>
      <search />
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view />
      <snack-bar />
    </v-main>
  </v-app>
</template>

<script>
import SnackBar from "@/components/Shared/SnackBar";
import LiveDate from "@/components/Tools/LiveDate";
import Search from "@/components/Tools/Search";
export default {
  components: {
    SnackBar,
    LiveDate,
    Search,
  },
  data() {
    return {
      drawer: null,
      avatar: require("@/assets/me.jpg"),
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

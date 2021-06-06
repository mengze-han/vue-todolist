<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(option, i) in options" :key="i" @click="choose(i)">
          <v-list-item-icon>
            <v-icon>{{ option.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ option.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <dialog-delete
      v-if="dialogs.delete"
      @close="dialogs.delete = false"
      :item="item"
    />
  </div>
</template>

<script>
export default {
  props: ["item"],
  data: () => ({
    dialogs: {
      delete: false,
    },
    options: [
      {
        title: "Edit",
        icon: "mdi-pencil",
        click() {
          console.log("edit");
        },
      },
      {
        title: "Due date",
        icon: "mdi-calendar-range",
        click() {
          console.log("Due date");
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete",
        click() {
          this.dialogs.delete = true;
          // console.log(111);
        },
      },
    ],
  }),
  methods: {
    choose(index) {
      console.log(index);
      this.options[index].click.call(this);
    },
  },
  components: {
    "dialog-delete": require("@/components/Dialog/DialogDelete").default,
  },
};
</script>

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
    <dialog-edit
      v-if="dialogs.edit"
      @close="dialogs.edit = false"
      :item="item"
    />
    <dialog-date-select
      v-if="dialogs.dueDate"
      @close="dialogs.dueDate = false"
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
      dueDate: false,
      edit: false,
    },
    options: [
      {
        title: "Edit",
        icon: "mdi-pencil",
        click() {
          this.dialogs.edit = true;
        },
      },
      {
        title: "Due date",
        icon: "mdi-calendar-range",
        click() {
          this.dialogs.dueDate = true;
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete",
        click() {
          this.dialogs.delete = true;
        },
      },
      {
        title: "sort",
        icon: "mdi-drag-horizontal-variant",
        click() {
          this.$store.commit("toggleSorting");
        },
      },
    ],
  }),
  methods: {
    choose(index) {
      this.options[index].click.call(this);
    },
  },
  components: {
    "dialog-delete": require("@/components/Todo/Dialog/DialogDelete").default,
    "dialog-edit": require("@/components/Todo/Dialog/DialogEdit").default,
    "dialog-date-select": require("@/components/Todo/Dialog/DueDateSelect")
      .default,
  },
};
</script>

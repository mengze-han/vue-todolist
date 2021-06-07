<template>
  <div class="text-subtitle-1">{{ date }}</div>
</template>

<script>
import format from "date-fns/format";
export default {
  data() {
    return {
      date: "",
    };
  },
  methods: {
    getDate() {
      this.date = format(new Date(), "yyyy/MMMM/d HH:mm:ss");
      setTimeout(this.getDate, 1000);
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>

<style></style>

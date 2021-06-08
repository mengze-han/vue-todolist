<template>
  <div class="pa-2">
    <h1>开发说明，此项目纯属娱乐 {{ $store.state.appTitle }}</h1>
    <h2>主要记录以下事情</h2>
    <a target="_blank" :href="projectUrl">
      <v-btn>打开项目地址</v-btn>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectUrl: "https://github.com/mengze-han/vue-todolist",
    };
  },
};
</script>

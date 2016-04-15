<template>
  <div id="app">
    <h1>Welcome to RSP</h1>
  <button @click="addAction()">Add Action</button>
  <div class="container">
    <div class="row">
      <action v-for="item in actions"></action>
    </div>
  </div>
</div>
</template>

<script>
import action from './action.vue'
export default {
  data() {
    return {
      actions: []
    }
  },
  methods: {
    addAction: function(){
      this.actions.push({
        action
      });
    }
  },
  components: {
    action
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

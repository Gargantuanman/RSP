<style>
.action {
  border-style: solid;
  border-color: black;
  padding: 20px;
}
</style>


<template>
    <div class="action three columns">
      <select v-model="selected">
        <option v-for="action in actionTypes">
          {{ action.text }}
        </option>
      </select>
      <p>Time:</p><input type="range" min="0" max="50">
      <p>Speed:</p><input type="range" min="0" max="50">
    </div>
</template>

<script>
import skeleton from './skeleton.css'

export default {
  data() {
    return {
      selected: 'Forward',
      actionTypes: [
        {text: 'Forward', value: 'fw'},
        {text: 'Backward', value: 'bw'},
        {text: 'Left', value: 'lf'},
        {text: 'Right', value: 'rt'}
      ],
    }
  }
}
</script>

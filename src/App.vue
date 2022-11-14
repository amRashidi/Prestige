<template>
  <h2>this is a prestige app</h2>
  <div class="wrapper">
    <PInput />
  </div>
</template>
<script lang="ts" setup>
import { defineComponent } from 'vue';
import PInput from './components/PInput';

defineComponent({
  PInput,
});
</script>
<style>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 1200px;
  height: 600px;
}
</style>

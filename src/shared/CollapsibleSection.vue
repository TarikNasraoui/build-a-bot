<template>
  <div>
    <div class="header">
        <span v-if="open" @click="open = !open">Collapse</span>
        <span v-if="!open" @click="open = !open ">Expend</span>
    </div>
    <slot v-if="open">
    </slot>
  </div>
</template>
<script>
export default {
  name: 'CollapsibleSection',
  data() {
    return {
      open: true
    };
  }
};
</script>
<style scoped>
  .header {
    background-color: #bbb;
    padding: 5px;
    cursor: pointer;
    text-align: center;
    color: aliceblue;
    font-weight: bold;
  }
</style>

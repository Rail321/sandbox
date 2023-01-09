<template>
  <div>
    <app-tab-item
      v-bind:item="root"
    />
  </div>
</template>

<script setup>
  defineProps( {
    root: {
      type: Object
    }
  } )
</script>
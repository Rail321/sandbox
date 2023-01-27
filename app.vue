<template>
  <div>
    <paginator v-bind:modelValue="1"/>
    <paginator v-model="currentPage2"/>
    <paginator v-model="currentPage3" v-bind:length="7"/>
    <paginator v-model="currentPage4" v-bind:length="9"/>
    <paginator v-model="currentPage5" v-bind:length="11"/>
  </div>
</template>

<script setup>
  const currentPage2 = ref( 1 )
  const currentPage3 = ref( 2 )
  const currentPage4 = ref( 2 )
  const currentPage5 = ref( 2 )
</script>
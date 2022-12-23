<template>
  <nuxt-layout>
    <div>
      <h1>{{ title }}</h1>
    </div>
  </nuxt-layout>
</template>

<script setup>
  const title = ref( 'Заказ' )

  useHead( {
    title
  } )
</script>
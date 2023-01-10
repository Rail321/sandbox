<template>
  <div>
    <pre>{{ category }}</pre>
  </div>
</template>

<script setup>
  import catalog from '@/data/catalog'

  const route = useRoute()

  const slug = route.params.slug
  const category = catalog.find( el => el.slug === slug )
</script>
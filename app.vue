<template>
  <div>
    <p>{{ now }}</p>
  </div>
</template>

<script setup>
  const moment = useNuxtApp().$moment

  const now = useState( 'now', () => moment().format( 'LLLL' ) )
</script>
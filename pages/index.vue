<template>
  <div>
    <div>
      <nuxt-link style="margin-right: 10px;" to="/">Главная</nuxt-link>
      <nuxt-link to="/catalog">Каталог</nuxt-link>
    </div>
    <div>
      <div
        v-if="loading"
      >
        <span>Загрузка...</span>
      </div>
      <div
        v-else
      >
        <h1>Главная</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
  const loading = useState( 'loading', () => false )
  try {
    await fetch( 'https://jsonplaceholder.typicode.com/todos' )
  } catch {}
  onBeforeRouteLeave(
    () => ( loading.value = true )
  )
  loading.value = false
</script>
<template>
  <div>
    <h1>Каталог</h1>

    <div
      v-for="item of catalog"
      v-bind:key="item.slug"
    >
      <nuxt-link
        v-bind:to="( '/catalog/' + item.slug )"
      >
        <span>{{ item.title }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
  import catalog from '@/data/catalog'
</script>
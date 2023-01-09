<template>
  <div>
    <app-tab
      v-bind:root="root"
    />
  </div>
</template>

<script setup>
  const root = {
    title: 'Каталог',
    childs: [
      {
        title: 'Инструменты'
      },
      {
        title: 'Электроника',
        childs: [
          {
            title: 'Смартфоны'
          },
          {
            title: 'Ноутбуки'
          }
        ]
      }
    ]
  }
</script>
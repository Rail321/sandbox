<template>
  <div>
    <div>
      <nuxt-link style="margin-right: 15px;"
        v-for="item of itemList"
        v-bind:key="item.slug"
        v-bind:to="item.path"
      >
        <span>{{ item.title }}</span>
      </nuxt-link>
    </div>
    <div>
      <slot/>
    </div>
  </div>
</template>

<script setup>
  const itemList = ref( [
    { slug: 'main', path: '/', title: 'Главная' },
    { slug: 'login', path: '/login', title: 'Вход' },
    { slug: 'order', path: '/order', title: 'Заказ' },
    { slug: 'control', path: '/control', title: 'Управление' },
  ] )

  const roleList = ref( [
    { slug: 'guest', title: 'Гость' },
    { slug: 'client', title: 'Клиент' },
    { slug: 'admin', title: 'Администратор' },
  ] )
</script>
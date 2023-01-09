<template>
  <div
    v-if="item"
  >
    <div>
      <span>{{ item.title }}</span>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button type="button"
        v-on:click="expanded = !expanded"
      >
        <span>Показать/скрыть</span>
      </button>
    </div>

    <div
      v-if="expanded"
    >
      <ul
        v-if="item.childs && item.childs.length"
      >
        <li
          v-for="( child, index ) of item.childs"
          v-bind:key="index"
        >
          <app-tab-item
            v-bind:item="child"
          />
        </li>
      </ul>

      <p
        v-else
      >
        <small>Нету дочерних элементов</small>
      </p>
    </div>
  </div>
</template>

<script setup>
  defineProps( {
    item: {
      type: Object
    }
  } )

  const expanded = ref( false )
</script>
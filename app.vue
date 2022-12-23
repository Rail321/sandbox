<template>
  <div>
    <div>
      <base-checkbox
        v-model="value1"
      />
      <span>-</span>
      <span>&nbsp;</span>
      <span>{{ value1 }}</span>
      <button type="button"
        v-on:click="value1 = !value1"
      >Переключить</button>
    </div>

    <div>
      <base-checkbox
        v-model="value2"
      />
      <span>-</span>
      <span>&nbsp;</span>
      <span>{{ value2 }}</span>
      <button type="button"
        v-on:click="value2 = !value2"
      >Переключить</button>
    </div>

    <div>
      <base-checkbox/>
      <span>-</span>
      <span>&nbsp;</span>
      <span>{{ value3 }}</span>
      <button type="button"
        v-on:click="value3 = !value3"
      >Переключить</button>
    </div>
  </div>
</template>

<script setup>
  const value1 = ref( false )
  const value2 = ref( true )
  const value3 = ref( false )
</script>
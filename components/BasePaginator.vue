<template>
  <div style="display: flex; margin: -5px;">
    <div class="item">
      <button type="button">
        <span>Начало</span>
      </button>
    </div>

    <div class="item">
      <button type="button">
        <span>Пред.</span>
      </button>
    </div>

    <div style="flex-grow: 1; display: flex; background-color: rgba(0,0,125,.25)">
      <div class="item"
        v-for="index of amount"
        v-bind:key="index"
      >
        <button type="button">
          <span>{{ index }}</span>
        </button>
      </div>
    </div>

    <div class="item">
      <button type="button">
        <span>След.</span>
      </button>
    </div>
    
    <div class="item">
      <button type="button">
        <span>Конец</span>
      </button>
    </div>
  </div>
</template>

<script setup>
  const current = useState( 'current', () => 1 )
  const amount = useState( 'amount', () => 75 )
</script>

<style scoped>
  .item {
    padding: 5px;
  }
</style>
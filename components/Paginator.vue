<template>
  <div style="display: flex;">
    <div style="padding: 2.5px;">
      <button type="button" class="item"
        v-bind:disabled="( modelValue <= 1 )"
        v-on:click="emit( 'update:modelValue', ( ( ( modelValue - 1 ) > 0 ) ? ( modelValue - 1 ) : 1 ) )"
      >
        <span>&#60;</span>
      </button>
    </div>

    <div style="padding: 2.5px;"
      v-if="( items[ 0 ] !== 1 )"
    >
      <button type="button" class="item"
        v-on:click="emit( 'update:modelValue', 1 )"
      >
        <span>1</span>
      </button>
    </div>

    <div style="padding: 2.5px;"
      v-if="( items[ 0 ] > 2 )"
    >
      <button type="button" class="item" disabled>
        <span>&#8230;</span>
      </button>
    </div>

    <div style="padding: 2.5px;"
      v-for="item of items"
      v-bind:key="item"
    >
      <button type="button" class="item"
        v-bind:class="{ current: ( item === modelValue ) }"
        v-on:click="emit( 'update:modelValue', item )"
      >
        <span>{{ item }}</span>
      </button>
    </div>

    <div style="padding: 2.5px;"
      v-if="( items[ items.length - 1 ] < ( length - 1 ) )"
    >
      <button type="button" class="item" disabled>
        <span>&#8230;</span>
      </button>
    </div>

    <div style="padding: 2.5px;"
      v-if="( items[ items.length - 1 ] !== length )"
    >
      <button type="button" class="item"
        v-on:click="emit( 'update:modelValue', length )"
      >
        <span>{{ length }}</span>
      </button>
    </div>

    <div style="padding: 2.5px;">
      <button type="button" class="item"
        v-bind:disabled="( modelValue >= length )"
        v-on:click="emit( 'update:modelValue', ( ( ( modelValue + 1 ) < length ) ? ( modelValue + 1 ) : length ) )"
      >
        <span>&#62;</span>
      </button>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps( {
    modelValue: {
      type: Number,
      default: 1
    },
    length: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 9
    }
  } )

  const emit = defineEmits( [
    'update:modelValue'
  ] )

  const { modelValue, length, limit } = toRefs( props )

  const items = computed( () => {
    const start = modelValue.value - Math.ceil( limit.value / 2 )
    const end = modelValue.value + Math.floor( limit.value / 2 )
    const list = []
    for ( let index = start; index <= end; index++ ) {
      list.push( index )
    }
    return list.filter( el => ( ( el > 0 ) && ( el <= length.value ) ) )
  } )
</script>

<style scoped>  
  .item {
    outline: none;
    border: 1px solid gray;
    border-radius: 2.5px;
    background-color: snow;
  }
  .current {
    background-color: skyblue;
  }
</style>
<template>
  <input
    type="checkbox"
    v-bind:checked="modelValue"
    v-on:change="onChange"
  />
</template>

<script setup>
  const instance = getCurrentInstance()

  const props = defineProps( {
    modelValue: {
      type: Boolean,
      default: () => false
    }
  } )

  const emit = defineEmits( [
    'update:modelValue'
  ] )

  const {
    modelValue
  } = toRefs( props )

  const onChange = event => {
    const value = event.target.checked
    emit( 'update:modelValue', value )
    instance.proxy.$forceUpdate()
  }
</script>
<template>
  <div class="wrapper">
    <div class="container">
      <svg class="chart"
        v-bind:viewBox="viewBox"
        v-on:click="toggle"
      >
        <path class="path"
          v-bind:d="pathed"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
  const modelValue = ref( [] )
  const padding = ref( 10 )
  const width = ref( 300 )
  const height = ref( 200 )
  const viewBox = computed( () => {
    return `0 0 ${ width.value } ${ height.value }`
  } )
  const paddinged = computed( () => {
    const result = []
    modelValue.value.forEach( el => {
      result.push( {
        x: ( padding.value + ( ( width.value - ( 2 * padding.value ) ) * ( el.x / width.value ) ) ),
        y: ( padding.value + ( ( height.value - ( 2 * padding.value ) ) * ( el.y / height.value ) ) )
      } )
    } )
    return result
  } )
  const pathed = computed( () => {
    const segments = []
    paddinged.value.forEach( ( el, idx ) => {
      if ( idx === 0 ) return segments.push( `M${ el.x },${ el.y }` )
      segments.push( `L${ el.x },${ el.y }` )
    } )
    const result = segments.join( ' ' )
    return result
  } )

  const data = ref( [
    [ { x: 0, y: 0 }, { x: 150, y: 200 }, { x: 300, y: 0 } ],
    [ { x: 0, y: 200 }, { x: 150, y: 0 }, { x: 300, y: 200 } ],
    [ { x: 0, y: 0 }, { x: 75, y: 200 }, { x: 150, y: 0 }, { x: 225, y: 200 }, { x: 300, y: 0 } ],
    [ { x: 0, y: 200 }, { x: 75, y: 0 }, { x: 150, y: 200 }, { x: 225, y: 0 }, { x: 300, y: 200 } ]
  ] )
  modelValue.value = data.value[ 0 ]
  const toggle = () => {
    const index = data.value.findIndex( el => ( el === modelValue.value ) )
    modelValue.value = data.value[ ( ( ( index + 1 ) === data.value.length ) ? 0 : ( index + 1 ) ) ]
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
  }
  .wrapper {
    padding: 10px;
  }
  .container {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  .chart {
    width: 100%;
    height: 200px;
    display: block;
    transform: scaleY(-1);
    background-color: gainsboro;
  }
  .path {
    fill: none;
    stroke: #000;
    stroke-width: 5;
    stroke-linecap: round;
    transition: .1s;
  }
</style>
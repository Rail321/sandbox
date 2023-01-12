<template>
  <div/>
</template>

<script setup>
  const Percent = value => {
    return {
      get value() {
        return value
      },
      get view() {
        return value.toFixed( 2 ) + '%'
      }
    }
  }
  const Item = data => {
    return {
      get visits() {
        return data.visits
      },
      get leads() {
        return data.leads
      },
      get conversion() {
        return Percent( ( data.leads / data.visits ) * 100 )
      }
    }
  }
  const Group = data => {
    return {
      get items() {
        return data.items
      },
      get visits() {
        return data.items.reduce( ( acc, el ) => ( acc + el.visits ), 0 )
      },
      get leads() {
        return data.items.reduce( ( acc, el ) => ( acc + el.leads ), 0 )
      },
      get conversion() {
        return Percent( ( this.leads / this.visits ) * 100 )
      }
    }
  }

  const item1 = Item( { visits: 500, leads: 150 } )
  const item2 = Item( { visits: 500, leads: 100 } )
  const group1 = Group( { items: [ item1, item2 ] } )
  const group2 = Group( { items: [ item1, item2 ] } )
  const group3 = Group( { items: [ group1, group2 ] } )

  console.log( item1 )
  console.log( item2 )
  console.log( group1 )
  console.log( group2 )
  console.log( group3 )
</script>
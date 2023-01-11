<template>
  <div>
    <div
      v-if="category"
    >
      <div>
        <div style="display: inline-block;"
          v-for="item of chain"
          v-bind:key="item.slug"
        >
          <nuxt-link
            v-bind:to="( '/catalog/' + item.slug )"
          >
            <span>{{ item.title }}</span>
          </nuxt-link>

          <span>&nbsp;</span>
          <span>&#8250;</span>
          <span>&nbsp;</span>
        </div>
      </div>

      <h1>{{ category.title }}</h1>

      <div
        v-if="subcategories.length"
      >
        <div
          v-for="item of subcategories"
          v-bind:key="item.id"
        >
          <nuxt-link
            v-bind:to="( '/catalog/' + item.slug )"
          >
            <span>{{ item.title }}</span>
          </nuxt-link>
        </div>
      </div>

      <div
        v-else
      >
        <p>Товары появятся позже.</p>
      </div>
    </div>

    <div
      v-else
    >
      <p>Не удалось найти данную категорию</p>
    </div>
  </div>
</template>

<script setup>
  import catalog from '@/data/catalog'

  const route = useRoute()
  const slug = route.params.slug

  const category = ref(
    catalog.find( el => el.slug === slug )
  )
  const subcategories = computed(
    () => ( catalog.filter( el => ( el.parentSlug === category.value.slug ) ) )
  )

  const chain = ref( [] )
  const defineChain = () => {
    const result = []
    let begin = catalog.find( el => ( el.slug === category.value.parentSlug ) )
    while ( begin ) {
      result.push( begin )
      if ( !begin.parentSlug )
        begin = null
      else
        begin = catalog.find( el => ( el.slug === begin.parentSlug ) )
    }
    chain.value = result.reverse()
  }

  defineChain()
</script>
import moment from 'moment'

moment.locale( 'ru' )

export default defineNuxtPlugin( nuxtApp => (
  nuxtApp.provide( 'moment', moment )
) )
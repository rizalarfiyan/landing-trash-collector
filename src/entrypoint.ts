import type { Alpine } from 'alpinejs'
import intersect from '@alpinejs/intersect'
import scrollTo from '@lib/scroll-to'
import counter from '@lib/counter'

export default (Alpine: Alpine) => {
    Alpine.plugin(intersect)
    Alpine.magic('scrollTo', scrollTo)
    Alpine.data('counter', counter)
}
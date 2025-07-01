import type { Alpine } from 'alpinejs'
import intersect from '@alpinejs/intersect'
import collapse from '@alpinejs/collapse'
import scrollTo from '@lib/scroll-to'
import counter from '@lib/counter'
import slider from '@lib/slider'
import logoWall from '@lib/logo-wall'
import accordion from '@lib/accordion'

export default (Alpine: Alpine) => {
    Alpine.plugin(intersect)
    Alpine.plugin(collapse)
    Alpine.magic('scrollTo', scrollTo)
    Alpine.data('counter', counter)
    Alpine.data('slider', slider)
    Alpine.data('logoWall', logoWall)
    Alpine.data('accordion', accordion)
}
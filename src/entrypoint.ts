import type { Alpine } from 'alpinejs'
import intersect from '@alpinejs/intersect'
import scrollTo from '@lib/scroll-to'
import counter from '@lib/counter'
import slider from '@lib/slider'
import logoWall from '@lib/logo-wall'

export default (Alpine: Alpine) => {
    Alpine.plugin(intersect)
    Alpine.magic('scrollTo', scrollTo)
    Alpine.data('counter', counter)
    Alpine.data('slider', slider)
    Alpine.data('logoWall', logoWall)
}
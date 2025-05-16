import type { Alpine } from 'alpinejs'
import ScrollTo from '@lib/scroll-to'

export default (Alpine: Alpine) => {
    Alpine.magic('scrollTo', ScrollTo)
}
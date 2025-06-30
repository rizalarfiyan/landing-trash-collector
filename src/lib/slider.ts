import EmblaCarousel, { type EmblaCarouselType } from "embla-carousel";
import type { AlpineComponent } from "alpinejs";

interface SliderState {
  embla: EmblaCarouselType | null;
  selected: number;
  dots: number[];
}

function slider(): AlpineComponent<SliderState> {
  return {
    embla: null,
    selected: 0,
    dots: [],
    init(this: AlpineComponent<SliderState> & { $refs: { embla: HTMLElement } }) {
      const node = this.$refs.embla;
      if (!node) return

      this.embla = EmblaCarousel(node, {
        loop: true,
        align: 'center',
      });
                    
      this.dots = this.embla.scrollSnapList();
      this.selected = this.embla.selectedScrollSnap();

      this.embla.on('select', () => {
          if (!this.embla) return
          this.selected = this.embla.selectedScrollSnap();
      });

      this.embla.on('reInit', () => {
        if (!this.embla) return
          this.dots = this.embla.scrollSnapList();
          this.selected = this.embla.selectedScrollSnap();
      });
    },
  };
}

export default slider
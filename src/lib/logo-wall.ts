import type { AlpineComponent } from "alpinejs";

function logoWall(): AlpineComponent<{}> {
  return {
    init(this: AlpineComponent<{}> & { $refs: { logos: HTMLElement } }) {
      const node = this.$refs.logos;
      if (!node) return
      const clone = node.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      node.after(clone);
    },
  };
}

export default logoWall

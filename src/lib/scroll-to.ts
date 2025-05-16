function scrollTo(el: HTMLElement) {
    const targetId = el.getAttribute('href')?.split('#')[1];
    if (!targetId) return;
    const scrollEl = document.getElementById(targetId);
    if (!scrollEl) return;
    const position = scrollEl.getBoundingClientRect();
    const headerOffset = document.querySelector<HTMLElement>('header')?.clientHeight || 0
    window.scrollTo({
        top: position.top + window.scrollY - headerOffset,
        left: 0,
        behavior: 'smooth',
    });
}

export default scrollTo

interface Item {
    question: string;
    answer: string;
    open: boolean;
}

function accordion(initials: Item[]) {
    return {
        items: initials.map(item => ({ ...item })),
        toggle(index: number) {
            this.items[index].open = !this.items[index].open;
        }
    };
}

export default accordion
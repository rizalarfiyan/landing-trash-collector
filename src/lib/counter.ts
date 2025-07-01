function counter(target: number, time = 400, start = 0) {
    return {
        current: 0,
        target: target,
        time: time,
        start: start,
        update: function() {
            start = this.start;
            const increment = (this.target - start) / this.time;
            const handle = setInterval(() => {
                if (this.current < this.target)
                    this.current += increment
                else {
                    clearInterval(handle);
                    this.current = this.target
                }
            }, 1);
        }
    };
}

export default counter
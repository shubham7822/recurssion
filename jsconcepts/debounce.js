function debounce(cb, d) {
    let timer;
    return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb.apply(this, args);
        }, d);
    };
}

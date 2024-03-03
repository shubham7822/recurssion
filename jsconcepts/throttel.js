function throttle(cb, d) {
    let called = false;
  
    return function(...args) {
        if (!called) {
            called = true;
            cb.apply(this, args);
            setTimeout(() => {
                called = false;
            }, d);
        }
    };
}

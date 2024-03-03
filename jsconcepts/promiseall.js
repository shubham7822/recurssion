const promiseAll = (promises) => {
    let result = [];
    let count = 0;
    return new Promise((res, rej) => {
        promises.forEach((p, idx) => {
            p.then((r) => {
                count++;
                result[idx] = r;
                if (count === promises.length) {
                    res(result);
                }
            }).catch((err) => {
                rej(err);
            });
        });
    });
};

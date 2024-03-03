const promiseany = (promises) => {
    let errors = [];
    return new Promise((resolve, reject) => {
        promises.forEach((p, idx) => {
            p.then((r) => {
               resolve(r); 
            }).catch((err) => {
               errors[idx] = err;
               if(errors.length === promises.length){
                reject(errors);
               }
            });
        });
    });
};

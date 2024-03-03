const asyncParallel = (tasks,resultsCallback) => {
    const results = []
    let taskCompleted = 0
    tasks?.forEach(asyncTask => {
        asyncTask(value => {
            results.push(value);
            tasksCompleted++;
            if (taskCompleted >= tasks.length) {
              resultsCallback.call(null, results);
            }
          });
    });



}
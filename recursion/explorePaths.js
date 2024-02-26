function explorePaths(matrix, i, j, callStack = []) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Base case: out of bounds
    if (i < 0 || i >= rows || j < 0 || j >= cols) {
        console.log(callStack.join(' -> '));
        return;
    }

    debugger
    // Base case: if cell is already visited
    if (matrix[i][j] === -1) {
        return;
    }

    // Mark the cell as visited
    matrix[i][j] = -1;

    // Do something with the current cell
    console.log(`Exploring (${i}, ${j})`);
    callStack.push(`(${i}, ${j})`);

    // Recursive case: explore up
    explorePaths(matrix, i - 1, j, [...callStack]);

    // Recursive case: explore down
    explorePaths(matrix, i + 1, j, [...callStack]);

    // Unmark the cell when backtracking
    matrix[i][j] = 0;
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

explorePaths(matrix, 1, 1);

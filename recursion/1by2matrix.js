function explorePaths(matrix, path, i, j) {
    // Base case: If we reach the end of the matrix
    if (i === matrix.length - 1 && j === matrix[0].length - 1) {
        // Print the path
        console.log(path);
        return;
    }

    // Explore rightward path if it's within bounds
    if (j + 1 < matrix[0].length) {
        explorePaths(matrix, path + "->(" + i + "," + (j + 1) + ")", i, j + 1);
    }

    // Explore downward path if it's within bounds
    if (i + 1 < matrix.length) {
        explorePaths(matrix, path + "->(" + (i + 1) + "," + j + ")", i + 1, j);
    }
}

// Define the 1x2 matrix
const matrix = [
    [1, 2]
];

// Start exploring paths from the top-left corner (0, 0)
explorePaths(matrix, "(0,0)", 0, 0);

function findPath(grid) {
    if (!grid || grid.length === 0) {
        return null;
    }

    const path = [];
    if (findPathRecursive(grid, 0, 0, path)) {
        debugger
        return path.reverse(); // Reverse the path to get start to end
    }
    return null;
}

function findPathRecursive(grid, row, col, path) {
    debugger
    if (row >= grid.length || col >= grid[0].length || grid[row][col] === 1) {
        return false;
    }

    const isAtEnd = (row === grid.length - 1) && (col === grid[0].length - 1);

    if (isAtEnd || findPathRecursive(grid, row + 1, col, path) || findPathRecursive(grid, row, col + 1, path)) {
         debugger
        path.push([row, col]);
        return true;
    }

    return false;
}

// Example usage:
const grid = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0]
];

const result = findPath(grid);
if (result) {
    console.log("Path exists:", result);
} else {
    console.log("No path exists.");
}

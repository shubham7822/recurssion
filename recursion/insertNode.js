class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function insertNode(root, value) {
    // Base case: if the tree is empty, create a new node and return it as the root
    if (root === null) {
        return new TreeNode(value);
    }

    // Recursive case: if the value is less than the current node, insert into the left subtree
    if (value < root.value) {
        root.left = insertNode(root.left, value);
    }
    // Otherwise, insert into the right subtree
    else {
        root.right = insertNode(root.right, value);
    }

    return root;
}

// Example usage:
let root = null;
root = insertNode(root, 10);
root = insertNode(root, 5);
root = insertNode(root, 15);
root = insertNode(root, 2);
root = insertNode(root, 7);

console.log(root);

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function createTree() {
    const root = new TreeNode(3);

    root.left = new TreeNode(9);
    root.right = new TreeNode(20);

    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(8)

    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);
    return root
}



function traverseBinaryTree(root = createTree()) {
    if (!root) {
        return;
    }
    console.log(root.val);

    traverseBinaryTree(root.left);
    traverseBinaryTree(root.right);


}

traverseBinaryTree()

console.log(
    "start of invert a binary tree"
)

function invertBinaryTree(root) {
    if (!root) {
        return;
    }
    console.log(root.val);
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertBinaryTree(root.left);
    invertBinaryTree(root.right);
    return root
}

const head = createTree()

console.log(invertBinaryTree(head))


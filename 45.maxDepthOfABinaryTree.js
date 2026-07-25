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

    root.right.right.left = new TreeNode(99);
    root.right.right.right = new TreeNode(100);

        root.right.right.left.left = new TreeNode(101);
                root.right.right.left.right = new TreeNode(102);




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


console.log("traversal start")
traverseBinaryTree()

console.log("traversal end")

const head = createTree()


function maxDepthOfBinaryTree(root, depth = 0) {
    if (!root) {
        console.log("depth at leaf", depth);
        return depth;
    }
    console.log(root.val);
    const lMaxDepth = maxDepthOfBinaryTree(root.left, depth+1);
    const rMaxDepth = maxDepthOfBinaryTree(root.right, depth+1);
    return Math.max(lMaxDepth, rMaxDepth)
}


console.log("Max Depth => ", maxDepthOfBinaryTree(head))
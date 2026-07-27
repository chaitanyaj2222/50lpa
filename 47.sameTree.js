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

function createTree2() {
    const root = new TreeNode(3);

    root.left = new TreeNode(9);
    root.right = new TreeNode(20);

    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(8)

    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    root.right.right.left = new TreeNode(100)
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

function sameTree(p, q) {
    if(!p && !q){
        return true;
    }
    if (p?.val !== q?.val) {
        return false;
    }
    return (sameTree(p?.left, q?.left) &&
        sameTree(p?.right, q?.right))

}

const p = createTree()
const q = createTree2()


console.log("same Tree => ", sameTree(p, q));


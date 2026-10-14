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
        return true;
    }
    console.log(root.val);
    
    if(root.left.val !== null && root.val <= root.left.val){
        return false;
    }
    if(root.right.val !== null || root.val >= root.right.val){
        return false;
    }

    return traverseBinaryTree(root.left) && traverseBinaryTree(root.right);




}

traverseBinaryTree()
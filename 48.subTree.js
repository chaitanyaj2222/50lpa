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
    const megaRoot = new TreeNode(100);



    const root = new TreeNode(3);
    megaRoot.left = root;
    megaRoot.right = null

    root.left = new TreeNode(9);
    root.right = new TreeNode(20);

    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(8)

    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    return megaRoot
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
    if (!p && !q) {
        return true;
    }
    if (p?.val !== q?.val) {
        return false;
    }
    return (sameTree(p?.left, q?.left) &&
        sameTree(p?.right, q?.right))

}



function subTree(p, q) {
    if(q === null) return true
    if(p === null){
        return false
    }
    if ((p.val === q.val) && sameTree(p, q)) {
        return true
    }
    return subTree(p.right, q) || subTree(p.left, q)
}

const p = createTree()
const q = createTree2()

console.log("sub tree => ", subTree(q,p))
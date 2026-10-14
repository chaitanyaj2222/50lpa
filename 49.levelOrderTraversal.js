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


    root.left.left.left = new TreeNode(100);
    root.left.left.right = new TreeNode(200);

    root.left.right.left = new TreeNode(300)
    root.left.right.right = new TreeNode(400)

    root.right.left.left = new TreeNode(500);
    root.right.left.right = new TreeNode(600);


    root.right.right.left = new TreeNode(700);
    root.right.right.right = new TreeNode(800);






    return root
}

function levelOrderTraversal(root) {
    if (root === null) return;
    let nodeQueue = [[root]]
    let op = [];

    while (nodeQueue.length) {
        let level = []
        let nextLevel = []
        let queueOut = nodeQueue.shift();
        // queueOut is [root];
        for (let i = 0; i < queueOut.length; i++) {

            level.push(queueOut[i].val)
            if (queueOut[i].left) {
                nextLevel.push(queueOut[i].left);
            }
            if (queueOut[i].right) {
                nextLevel.push(queueOut[i].right)
            }
        }
        op.push(level)
        if (nextLevel.length) {
            nodeQueue.push(nextLevel);

        }

    }

    return op;

}

let head = createTree();
console.log(levelOrderTraversal(head))
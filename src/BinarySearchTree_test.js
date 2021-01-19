const BinarySearchTree = require('./binary-search-tree');

function createBalancedBst(arr, start=0, end=arr.length) {
    if(start === end) {
        return null;
    }

    const middleIndex = Math.floor((start + end) / 2);
    const middleValue = arr[middleIndex];
    const node = new BinarySearchTree(middleValue);
    
    const leftSubTree = createBalancedBst(arr, start, middleIndex);
    const rightSubTree = createBalancedBst(arr, middleIndex+1, end);

    node.left = leftSubTree;
    node.right = rightSubTree;

    return node;
}

console.log(
    JSON.stringify(createBalancedBst([1, 2, 3, 5, 5.5, 7, 9, 11]), undefined, 2)
)
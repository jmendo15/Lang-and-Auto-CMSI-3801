class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function isBalanced(root) {
    // Helper function to calculate the height of a subtree.
    function getHeight(node) {
      if (!node) {
        return 0;
      }
      const leftHeight = getHeight(node.left);
      if (leftHeight === -1) {
        return -1; // Left subtree is unbalanced, no need to continue.
      }
      const rightHeight = getHeight(node.right);
      if (rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
        return -1; // Right subtree is unbalanced or overall tree is unbalanced.
      }
      return Math.max(leftHeight, rightHeight) + 1; // Calculate the height.
    }
  
    return getHeight(root) !== -1; // If getHeight returns -1, the tree is unbalanced.
  }
  
  // Example usage:
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.right = new TreeNode(6);
  
  console.log(isBalanced(root)); // Output: true
  
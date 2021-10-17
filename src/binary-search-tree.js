const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.rootTree = null
  }
  root() {
    return this.rootTree
  }
  add(data) {
    this.rootTree = addNode(this.rootTree, data)
    function addNode(node, data) {
      if (!node) {
        return new Node(data)
      }
      if (data == node.data) {
        return data
      }
      if (data > node.data) {
        node.right = addNode(node.right, data)
      } else {
        node.left = addNode(node.left, data)
      }
      return node
    }
  }
  has(data) {
    return hasNode(this.rootTree, data)
    function hasNode(node, value) {
      if (!node) {
        return false
      }
      if (node.data == value) {
        return true
      }
      return value < node.data ? hasNode(node.left, value) : hasNode(node.right, value)
    }
  }
  find(data) {
    return findNode(this.rootTree, data)
    function findNode(node, data) {
      if (!node) {
        return null
      }
      if (node.data == data) {
        return node
      }
      return data < node.data ? findNode(node.left, data) : findNode(node.right, data)
    }
  }
  remove(data) {
    this.rootTree = removeNode(this.rootTree, data)
    function removeNode(node, data) {
      if (!node) {
        return null
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }
        let minRight = node.right
        while (minRight.left) {
          minRight = minRight.left
        }
        node.data = minRight.data
        node.right = removeNode(node.right, minRight.data)
        return node
      }
    }
  }
  min() {
    if (!this.rootTree) {
      return null
    }
    let node = this.rootTree
    while (node.left) {
      node = node.left
    }
    return node.data
  }
  max() {
    if (!this.rootTree) {
      return null
    }
    let node = this.rootTree
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}

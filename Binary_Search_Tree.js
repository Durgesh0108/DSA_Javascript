class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // insert(value) {
  //   var newNode = new Node(value);
  //   if ((this.root = null)) {
  //     this.root = newNode;
  //     return this;
  //   }
  //   var current = this.root;
  //   while (true) {
  //     if (value === current.value) {
  //       return null;
  //     }
  //     if (value < current.value) {
  //       if (current.left === null) {
  //         current.left = newNode;
  //         return this;
  //       }
  //       // else{
  //       current = current.left;
  //       // }
  //       // if(current.right === null){
  //       //     current.right = newNode;
  //       //     return this;
  //       // }
  //     } else if (value > current.value) {
  //       if (current.right === null) {
  //         current.right = newNode;
  //         return this;
  //       }
  //       // else{
  //       current = current.right;
  //       // }
  //       // if(current.right === null){
  //       //     current.right = newNode;
  //       //     return this;
  //       // }
  //     }
  //   }
  // }

  insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
      if(!this.root){
        return false
      }

      var current = this.root, found = false;
    
      while(current && !found){
        if(value < current.value){
          current = current.left;
        }else if(value > current.value){
          current = current.right;
        }else{
          found = true
        }
      }
      return current 
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

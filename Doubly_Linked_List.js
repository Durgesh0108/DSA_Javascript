class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode 
        }
        this.length++;
        return this;
    }
   pop(){
      if(this.length === 0){
         return undefined;
      }
      var popped = this.tail;
      if(this.length === 1){
         this.head = null;
         this.tail = null
      }
      else{
         this.tail = popped.prev;
         this.tail.next = null;
         popped.prev = null;
      }
      this.length--;
      return popped;
   }
   shift(){
      if(this.length === 0){
         return undefined
      }

      var popped = this.head;
      if(this.length === 1){
         this.head = null;
         this.tail = null;
      }
      else{
         this.head = popped.next;
         this.head.prev = null;
         popped.next = null;
      }
      this.length--;
      return popped
   }
   unshift(val){
      var newNode = new Node(val)
      if(this.length === 0){
         this.head = newNode;
         this.tail = newNode;
      }else{
         this.head.prev = newNode;         
         newNode.next = this.head
         this.head = newNode;
      }
      this.length++;
      return this; 
   }
   get(index){
      if(index < 0 || index >= this.length) return null;
      var count = 0;
      var current = this.head;
      while(count != index){
         current = current.next;
         count++;
      }
      return current
      // var middle = Math.floor(this.length / 2);
      // console.log(index,middle)
      // if(index < middle){
      //    for(var i = 0; i < middle ; i++){
      //       if(index === i){
      //          return this[i];
      //       }
      //    }
      // }else{
      //    for(var j = middle; j < length; j++){
      //       console.log(j)
      //    }
      // }
      
   }
}

let list = new DoublyLinkedList()

list.push(15)
list.push(20)
list.push(25)
list.push(30)
list.push(35)
list.push(40)
list.push(45)
list.push(50)
list.push(55)
list.push(60)
list.push(65)
list.push(70)

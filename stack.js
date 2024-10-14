class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode
        }else{
            var temp = this.first;
            this.first = newNode
            this.first.next = temp
        }
        // this.size++;
        return ++this.size;
    }
    pop(){
        // if(this.size === 0){
        //     return null;
        // }
        // var temp = this.first;
        // if(this.size === 1){
        //     this.first = null;
        //     this.last = null;
        // }else{
        //     this.first = temp.next;
        //     temp.next = null;
        // }
        // this.size--;
        // return temp.value;

        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }

        this.first = this.first.next
        this.size--;
        return temp.value;
        
    }
}

const stack = new Stack();
stack.push(15);
stack.push(20);
stack.push(25);
stack.push(30);
stack.push(35);

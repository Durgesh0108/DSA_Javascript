class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    queue(value){
        var newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size
    }
    dequeue(){
        if(this.size === 0){
            return null;
        }
        var temp = this.first;

        if(temp.size === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = this.first.next;
            temp.next = null
        }
        this.size--;
        return temp.value;
    }
}

var q = new Queue()
q.queue(15)
q.queue(16)
q.queue(17)
q.queue(18)

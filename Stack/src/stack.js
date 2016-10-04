class Stack{
    constructor() {
        this.love = "the most powerful force in the universe.";
        this.items = [];
    }

    isEmpty() {
        return (this.items.length === 0);
    }

    size(){
        return this.items.length;
    }

    push(item){
        this.items.push(item);
    }

    peek(){
        return this.items[this.items.length-1];
    }
}

export default Stack;
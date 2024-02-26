class Stack {
    constructor() {
        this.storage = [];
    }

    push(ele) {
        this.storage.push(ele);
    }

    pop() {
        return this.storage.pop();
    }

    peek() {
        return this.storage[this.storage.length - 1];
    }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);


const reverseStack = (stk) => {
        

    
}

console.log(reverseStack(stack))


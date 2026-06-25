class MinStack {
    constructor() {
        this.stack = [];
        this.minValue = Infinity;
    }

    push(val) {
        this.minValue = Math.min(val, this.minValue)
        this.stack.push([val, this.minValue]);

        return this.stack.length;
    }

    pop() {

        let poppedValue = this.stack.pop()
        if (this.stack.length === 0) {
            this.minValue = Infinity
        }
        else {
            this.minValue = this.stack[this.stack.length-1][1]

        }
        return poppedValue[0]
    }


    getMin() {
        return this.stack[this.stack.length - 1][1]

    }



    top() {
        return this.stack[this.stack.length - 1][0]
    }
}


let stack = new MinStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(-4);
stack.push(-9);
stack.push(-5);

console.log("top after pushing -5:", stack.top());       // expected: -5
console.log("min after pushing -5:", stack.getMin());    // expected: -9

stack.pop();

console.log("min after popping -5:", stack.getMin());    // expected: -9
console.log("top after popping -5:", stack.top());       // expected: -9


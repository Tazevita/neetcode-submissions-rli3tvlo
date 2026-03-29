class MinStack {
    constructor() {
        this.out = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        return this.out.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        return this.out.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.out[this.out.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.out)
    }
}

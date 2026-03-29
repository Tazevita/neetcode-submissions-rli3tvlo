class ListNode {
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.maxSize = capacity;
        this.size = 0;
        this.hm = {};
        this.left = new ListNode(0, 0);
        this.right = new ListNode(0, 0)

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    insert(node){
        let next = this.right.prev;

        node.next = this.right;
        this.right.prev = node;

        next.next = node;
        node.prev = next;
    }

    remove(node){
        let prev = node.prev;
        let next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.hm[key]){
            let node = this.hm[key];
            this.remove(node)
            this.insert(node)
            return this.hm[key].val;
        } else{
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.hm[key]){
            this.remove(this.hm[key])
        } else{
            this.size++
        }
        this.hm[key] = new ListNode(key, value);
        this.insert(this.hm[key]);

        if(this.size > this.maxSize){
            let lru = this.left.next;
            delete this.hm[lru.key]
            this.remove(lru);
            this.size--
        }
    }
}

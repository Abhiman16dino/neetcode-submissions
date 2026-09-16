class Node {
        constructor(key, value){
            this.key = key
            this.val = value
            this.prev = null
            this.next = null
        }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity
        this.cache = new Map();
        this.left = new Node(0,0)
        this.right = new Node(0,0)
        this.left.next = this.right
        this.right.prev = this.left
    }

    remove(node) {
        const prev = node.prev
        const next = node.next
        prev.next = next
        next.prev = prev
    }

    insert(node) {
        const prev = this.right.prev
        prev.next = node
        node.prev = prev
        node.next = this.right
        this.right.prev = node
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)) {
            return -1;
        }
        // Remove the key node
        const node = this.cache.get(key)
        this.remove(node)
        this.insert(node)
        return node.val
        // insert the key node to the end to update recency
        // return the value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // Remove the key node 
        // Insert the key node
        // if capicity increases
        // remove the left node

        if(this.cache.get(key)){
            this.remove(this.cache.get(key))
        }
        const newNode = new Node(key, value)
        this.cache.set(key, newNode)
        this.insert(newNode)

        if(this.cache.size > this.cap){
            const lru = this.left.next
            this.remove(lru)
            this.cache.delete(lru.key)
        }
    }
}

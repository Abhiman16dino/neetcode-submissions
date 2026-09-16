class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null)
        this.end = false
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root
        for(let c of word){
            let i = c.charCodeAt(0) - 97;
            if(curr.children[i] == null){
                curr.children[i] = new TrieNode();
            }
            curr = curr.children[i]
        }
        curr.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root
        for(let c of word) {
            let i = c.charCodeAt(0) - 97
            if(!curr.children[i] == null ){
                return false
            }
            curr = curr.children[i];
        }
        return curr.end
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root
        for(let c of prefix) {
            let i = c.charCodeAt(0) - 97
            if(curr.children[i] == null ){
                return false
            }
            curr = curr.children[i];
        }
        return true;
    }
}

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const n = s1.length;
        const m = s2.length;

        const target = new Array(26).fill(0)
        const window = new Array(26).fill(0)
        const base = 'a'.charCodeAt(0)

        const arrayEquals = (a1, a2) => {
            for(let i = 0; i < 26; i++){
                if(a1[i] !== a2[i]) return false;
            }
            return true;
        }

        for(const ch of s1){
            target[ch.charCodeAt(0) - base]++
        }

        for(let i = 0; i < n; i++){
            window[s2.charCodeAt(i) - base]++;
        }

        if(arrayEquals(window, target)){
            return true;
        }

        for(let i = n; i < m; i++){
            window[s2.charCodeAt(i) - base]++
            window[s2.charCodeAt(i - n) - base]--

            if(arrayEquals(window, target)) {
                return true;
            }
        }
        return false;
    }
}

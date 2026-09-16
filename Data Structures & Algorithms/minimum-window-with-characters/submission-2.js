class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const include = function(s, t){
            // for (let ch of t) {
            //     let charFound = false;
            //     for (let item of s){
            //         if(item == ch){
            //             charFound = true;
            //             break;
            //         }
            //     }
            //     if (!charFound){
            //         return false;
            //     }
            // }
            // return true;
            const hashOfT = {};
            for(let ch of t){
                hashOfT[ch] = (hashOfT[ch] || 0) + 1;
            }

            console.log("T",hashOfT)

            const hashOfS = {};
            for(let ch of s){
                hashOfS[ch] = (hashOfS[ch] || 0) + 1;
            }

            console.log("S",hashOfS)

            console.log("-------")

            // Compare
            let isSame = true;
            for(let key in hashOfT){
                console.log(key)
                console.log("t",hashOfT[key]);
                console.log("s",hashOfS[key]);
                if(hashOfT[key] > hashOfS[key] || !hashOfS[key]){
                    console.log("False")
                    // return false;
                    isSame = false;
                }
            }

            return isSame;


        }

        // console.log(include("xyz", "xyz"));
        if(t.length > s.length){
            return "";
        }

        let window = t.length;
        let left = 0;
        let right = t.length;

        while(window <= s.length){
            // console.log("object")
            while(right <= s.length){
                let currentString = s.substring(left, right);
                console.log(currentString);
                if(include(currentString, t)){
                    // console.log("true")
                    console.log("cr: ", currentString);
                    console.log("t: ", t);
                    return currentString;
                }
                ++left;
                ++right;
            }
            ++window;
            right = window;
            left = 0;
        }
        return "";
    }
}

console.log(new Solution().minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd"))

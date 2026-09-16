class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return "";
        }
        const arr = this.keyStore.get(key);
        let l = 0, r = arr.length - 1;
        let ans = "";

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (arr[mid][0] <= timestamp) {
                ans = arr[mid][1]; // store value
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return ans;
    }
}

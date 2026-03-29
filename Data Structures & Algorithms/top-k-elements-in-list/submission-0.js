class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
topKFrequent(nums, k) {
        const hm = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        // Count frequencies
        for (const num of nums) {
            hm[num] = (hm[num] || 0) + 1;
        }

        // Bucket numbers by frequency
        for (const num in hm) {
            freq[hm[num]].push(parseInt(num));
        }

        // Collect top k frequent
        const res = [];
        for (let i = freq.length - 1; i >= 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) return res;
            }
        }

        return res;
    }
}

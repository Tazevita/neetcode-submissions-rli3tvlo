class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        if(nums.length <= 2){
            for(let i = 0; i < nums.length; i++){
                if(nums[i] === target){
                    return i;
                }
            }
            return -1;
        }
        let l = 0;
        let r = nums.length - 1;

        if(nums[l] < nums[r]){
            while(l <= r){
            let mid = Math.floor((l+r) / 2);

            console.log(mid, nums[mid])

            if(target > nums[mid]){
                l = mid + 1;
            } else if(target < nums[mid]){
                r = mid - 1;
            } else{
                return mid;
            }
        }
        }

        let lowestIndex;
        let middle;

        while(l <= r && lowestIndex === undefined){
            if(nums[l] === target){
                return l;
            } else if(nums[r] === target){
                return r;
            }
            if(nums[l] <= nums[r]){
                lowestIndex = l;
                middle = l;
            } else{
                middle = Math.floor((r+l) / 2);

                if(nums[middle] < nums[middle - 1] && nums[middle] < nums[middle + 1]){
                    lowestIndex = middle;
                    break;
                }

                if(nums[middle] > nums[r]){
                    l = middle + 1;
                } else if(nums[middle] < nums[r]){
                    r = middle - 1;
                } else{
                    lowestIndex = middle;
                    break;
                }
            }
        }


        l = middle - 1;
        r = middle;

        if(nums[l] === target){
            return l;
        } else if(nums[r] === target){
            return r;
        }


        if(target > nums[0] && target < nums[l]){
            r = l;
            l = 0;
        } else if(target > nums[r] && target < nums[nums.length - 1]){
            l = r;
            r = nums.length - 1;
        }

        console.log(l, r)

        while(l <= r){
            let mid = Math.floor((l+r) / 2);

            console.log(mid, nums[mid])

            if(target > nums[mid]){
                l = mid + 1;
            } else if(target < nums[mid]){
                r = mid - 1;
            } else{
                return mid;
            }
        }

        

        return -1;

    }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0;
    if (nums.length == 1) {
        return nums;
    } else {
        for (let i=0; i<nums.length; i++) {
            if (nums[i] != 0) {
                nums[index] = nums[i];
                index++;
            }
        }

        for (let i = index; i<nums.length; i++) {
            nums[i] =0;
        }
        
        return nums;
    }
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;
    while (left<=right) {
        if ((numbers[left]+numbers[right])===target) {
            return [left+1, right+1];
        }
        if ((numbers[left]+numbers[right])>target) {
            right--;
        } else {
            left++;
        }
    }
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m-1;
    let p2 = n-1;

    for (let i = m+n-1; i>=0; i--) {
        if (p2<0) {
            break;
        }
        if (nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 1;
    for (let i = 0; i<nums.length-1; i++) {
        if (nums[i] != nums[i+1]) {
            nums[index] = nums[i+1];
            index++;
        }
    }
    return index;
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index1 = 0;
    let index2 = 0;
    while(index1<0) {
        if(nums1[index1]>=nums2[index2]) {
            let temp = nums1[index1 + 1];
            nums1[index1 + 1] = nums2[index2];
            nums2[index2] = temp;
            index1++;
        } else {
            index2++
        }
    }
}

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;
    while (left<=right) {
        if ((numbers[left]+numbers[right])===target) {
            return [left+1, right+1];
        }
        if ((numbers[left]+numbers[right])>target) {
            right--;
        } else {
            left++;
        }
    }
};

var searchInsert = function(nums, target) {
    for (let i=0; i<nums.length; i++) {
        if(nums[i]>=target) {
            return i;
        }
    }
    return nums.length;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 1;
    for (let i = 0; i<nums.length-1; i++) {
        if (nums[i] != nums[i+1]) {
            nums[index] = nums[i+1];
            index++;
        }
    }
    return index;
};
/**
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 * */

export function longestOnes(nums, k) {
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            k -= 1;
        }
        if (k < 0) {
            k += 1 - nums[left];
            left++;
        }
        right++;
    }

    return right - left;
}

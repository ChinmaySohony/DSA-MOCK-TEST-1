function moveZeroes(nums) {
  let left = 0; // Pointer to track the index of the next non-zero element

  // Move non-zero elements to the left side of the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[left] = nums[i];
      left++;
    }
  }

  // Fill the remaining elements with zeroes
  for (let i = left; i < nums.length; i++) {
    nums[i] = 0;
  }
}

def big_diff(nums):
  max = nums[0]
  min = nums[0]
  for i in range(len(nums)):
    if max < nums[i]:
      max = nums[i]
  for i in range(len(nums)):
    if min > nums[i]:
      min = nums[i]
  return max - min

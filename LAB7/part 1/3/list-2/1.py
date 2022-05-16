def count_evens(nums):
  ans = 0
  for i in range(len(nums)):
    if nums[i]%2 == 0:
      ans += 1
  return ans

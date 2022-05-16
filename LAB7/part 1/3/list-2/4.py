def sum13(nums):
  res = 0
  for i in range(len(nums)):
    if nums[i] == 13 and i != len(nums)-1:
      nums[i + 1] = 0
  for i in range(len(nums)):
    if nums[i] != 13:
      res += nums[i]
  return res

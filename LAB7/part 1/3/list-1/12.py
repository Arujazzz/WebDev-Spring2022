def has23(nums):
  check = [2, 3]
  for i in range(len(nums)):
    if nums[i] in check:
      return True
  return False

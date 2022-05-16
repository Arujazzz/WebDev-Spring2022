def max_end3(nums):
  new_max = 0
  new_l = []
  if nums[0] > nums[len(nums)-1]:
    new_max = nums[0]
  else:
    new_max = nums[len(nums)-1]
  for i in range(len(nums)):
    nums[i] = new_max
    new_l.append(new_max)
  return new_l
    

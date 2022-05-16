def rotate_left3(nums):
  new_l = []
  for i in range(1, len(nums)):
    new_l.append(nums[i])
  new_l.append(nums[0])
  return new_l
  

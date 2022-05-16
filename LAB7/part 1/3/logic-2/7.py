def make_chocolate(small, big, goal):
  big_needed = min(big, goal // 5)
  if goal - (big_needed * 5) <= small:
    return goal - (big_needed * 5)
  return -1
  

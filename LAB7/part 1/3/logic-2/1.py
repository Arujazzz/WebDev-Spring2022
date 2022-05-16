def make_bricks(small, big, goal):
  big_needed = min(big, goal // 5)
  if goal - (big_needed * 5) <= small:
    return True
  return False

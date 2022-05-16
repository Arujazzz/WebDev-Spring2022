def close_far(a, b, c):
  if abs(b - a) == 1:
    if abs(c - a) >= 2 and abs(c - b) >= 2:
      return True
    return False
  elif abs(c - a) == 1:
    if abs(b - a) >= 2 and abs(b - c) >= 2:
      return True
    return False
  return True
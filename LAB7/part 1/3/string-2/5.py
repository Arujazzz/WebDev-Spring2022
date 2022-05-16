def end_other(a, b):
  a = a.lower()
  b = b.lower()
  if a[len(a) - len(b): len(a)] == b:
    return True
  elif b[len(b) - len(a): len(b)] == a:
    return True
  return False

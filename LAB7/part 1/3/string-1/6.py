def first_two(str):
  if str == '':
    return ''
  elif len(str) < 2:
    return str
  else:
    return str[0:2]

def not_string(str):
  if str[0:3] != 'not':
    return 'not ' + str
  else:
    return str

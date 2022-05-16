def missing_char(str, n):
    new_s = ''
    for i in range(len(str)):
        if i != n:
            new_s += str[i]
    return new_s

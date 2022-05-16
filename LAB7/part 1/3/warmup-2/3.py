def string_bits(str):
    new_s = ''
    for i in range(len(str)):
        if i %2 == 0:
            new_s = new_s + str[i]
    return new_s
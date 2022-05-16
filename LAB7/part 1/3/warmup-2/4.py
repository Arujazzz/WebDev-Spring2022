def string_splosion(str):
    new_s = ''
    for i in range(len(str)):
        new_s = new_s + str[:i + 1]
    return new_s
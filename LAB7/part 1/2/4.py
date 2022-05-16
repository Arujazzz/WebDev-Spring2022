def minion_game(string):
    k = 0
    s = 0
    list = 'AEUIO'
    for i in range(len(string)):
        if string[i] in list:
            k += (len(string) - i);
        else:
            s += (len(string) - i)
    if s > k:
        print('Stuart', s)
    elif s < k:
        print('Kevin', k)
    else:
        print('Draw')
    # your code goes here

if __name__ == '__main__':
    s = input()
    minion_game(s)
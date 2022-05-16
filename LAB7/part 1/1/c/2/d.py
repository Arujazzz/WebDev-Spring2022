a = int(input())
x = 1
if a == 1:
    print("YES")
elif a % 2 == 0:
    while x < a:
        x *= 2
    else:
        if x == a:
            print('YES')
        elif x > a:
            print('NO')
else:
    print('NO')
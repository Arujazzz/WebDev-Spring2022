a = int(input())
b = int(input())
for x in [i*i for i in range(b) if i*i>=a and i*i<=b]:
    print(x)
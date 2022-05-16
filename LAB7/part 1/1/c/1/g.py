x = int(input())
d = 2
while d*d <= x:
    if x%d == 0:
        print(d)
        break
    d += 1 
if d*d > x:
    print(x)
x = int(input())
d = 1
ans = 0
while d <= x:
    if x%d == 0:
       ans += 1
    d += 1 
print(ans) 
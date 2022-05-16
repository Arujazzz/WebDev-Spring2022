a = int(input())
b = int(input())
ans = []
for i in range(a, b+1):
    if i%2==0:
        ans.append(i)
print(*ans)
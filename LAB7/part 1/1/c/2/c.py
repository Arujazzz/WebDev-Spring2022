n = int(input())
ans = []
for i in range(0, n + 1):
    if pow(2, i) <= n:
        ans.append(pow(2, i))
print(*ans)
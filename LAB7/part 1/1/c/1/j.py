ans = 0

num = list(map(int, input().split()))
for i in range(len(num)):
    ans += num[i]
print(ans)
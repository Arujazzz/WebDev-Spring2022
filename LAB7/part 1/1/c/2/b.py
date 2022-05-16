n = int(input())
ans = []
for i in range(2, n + 1):
    if n%i == 0:
        ans.append(i)
print(ans[0])
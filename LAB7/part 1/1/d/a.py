n = int(input())
nums = list(map(int, input().split()))
ans = []
for i in range(len(nums)):
    if i%2 == 0:
        ans.append(nums[i])
print(*ans)
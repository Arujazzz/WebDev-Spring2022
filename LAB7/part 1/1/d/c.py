n = int(input())
nums = list(map(int, input().split()))
ans = 0
for i in range(len(nums)):
    if nums[i] > 0:
        ans += 1
print(ans)
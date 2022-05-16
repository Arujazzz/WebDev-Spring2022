n = int(input())
nums = list(map(int, input().split()))
ans = 0
for i in range(1, len(nums) - 1):
    if nums[i] > nums[i-1] and nums[i] > nums[i+1]:
        ans += 1
print(ans)
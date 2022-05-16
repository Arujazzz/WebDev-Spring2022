n = int(input())
p = 1
count = 0
while p < n:
    p <<= 1
    count += 1
print(count)
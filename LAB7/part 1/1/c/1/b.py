a = int(input())
b = int(input())
c = int(input())
d = int(input())
s = ""
while a<=b:
    if a%d==c:
        s = s + str(a) + " "
    a += 1
print(s)
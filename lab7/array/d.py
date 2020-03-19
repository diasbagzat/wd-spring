a = []

n = int(input())
cnt = 0
for i in range(0, n):
    a.append(int(input()))

for i in range(0, n):
    if a[i-1] < a[i]:
        cnt = cnt+1

print(cnt)

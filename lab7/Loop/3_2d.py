n = int(input())

m = 0

while n :
    m += n%2
    n = n/2

if m == 1:
    print('YES')
else: 
    print('NO')
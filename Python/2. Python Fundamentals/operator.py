a = 15
b = 10

#Arithmetic Operator

#addition
print('Sum is :', a+b)
#sub
print('Sub is :', a-b)
#mul
print('Mul is :', a*b)
#Divison
print('Div is :', a/b)
#Floor Divison
print('Floor Div :', a//b)
#modulo
print('Mod is:', a%b)
#power
print('Power is :', a**b)


#Assignment Operator
x = 5

y = 10

print(x)
x = y


x += y  # x = x+y
print(x)

#sub
aa = 5
aa -= 3
print(aa)

#div
aa /=3
print(aa)

aa *=3
print(aa)

# 3. Python Comparison Operator

a = 5
b = 2
#Greater Than and Less Than
print(a>b)
print(a<b)

#equal to operator
print('a == b', a==b)

#Not equal to operator
print('a!=b', a!=b)

#Greater Than equal to
print('a>=b', a>=b)
#Less Than equal to
print('a<=b', a<=b)

# 4. Logical Operator

# AND
print(a>2 and b>=6)
#print(True and True) #True
#print(True and False) #False

# Logical OR
print(a>2 or b>=6)

#Logical Not
print(not True)


#Bitwise Operator
print(4 & 4)
print(5 | 4)
print(10 ^ 4)


# Python Special Operator

# is operator

x1 = 5
y1 = 5
x2 = 'Python'
y2 = 'Python'
x3 = [1,2,3]
y3 = [1,2,3]

print(x2 is not y2)


#Membership
#in

msg = 'Hello Mursaleen'
print('en'  in msg)
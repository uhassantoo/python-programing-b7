# create a fun

def greet():
    print('Hello Python Function')
    
#call a function
greet()

#Python Arguments

def greet(name):
    print('Hellow',  name)
    
greet('Umer')

def greet(name,age):
    print('Helloww...',name,age)
    
greet('Ahmad',18)

#function to add two numbers
def add(num1,num2):
    sum = num1 + num2
    print("Sum is ....", sum)
    
add(4,6)

# Find a Square
def find_square(num):
    result = num * num
    return result

#function call
square = find_square(5)
print('Square is', square)

#Default Arguments
def addnum(a = 10,b = 10):
    sum = a+b
    print('Sum is...',sum)
    
addnum(30,30)


# Sometimes, we do not know in advance the number of arguments that will be passed into a function. To handle this kind of situation, we can use arbitrary arguments in Python.

# Arbitrary arguments allow us to pass a varying number of values during a function call.

# We use an asterisk (*) before the parameter name to denote this kind of argument. 

def find_sums(**num ):
    result = 0
    for nums in num:
        result = result + nums
        
    print('Sum is ....arbitary arguments', result)
    
find_sums(2,2)

# Using *args and **kwargs in Python to set values of object
# *args receives arguments as a tuple.
# **kwargs receives arguments as a dictionary.

def myFun(arg1, arg2, arg3):
    print("arg1:", arg1)
    print("arg2:", arg2)
    print("arg3:", arg3)


# Now we can use *args or **kwargs to
# pass arguments to this function :
args = ("Geeks", "for", "Geeks")
myFun(*args)

kwargs = {"arg1": "Geeks", "arg2": "for", "arg3": "Geeks"}
myFun(**kwargs)
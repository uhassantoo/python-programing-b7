print('Python Programming')


# object - value(s) to be printed
# sep (optional) - allows us to separate multiple objects inside print().
# end (optional) - allows us to add add specific values like new line "\n", tab "\t"
# file (optional) - where the values are printed. It's default value is sys.stdout (screen)
# flush (optional) - boolean specifying if the output is flushed or buffered. Default: False

print('Good morning', end='')
print(' Today is Smogy Day')

# Python Concat Strings
print('Hello Python' + ' Programmer')

#Output Formatting

x = 5
y = 10
a = 'umer'
b = 'hassan'
b = a.capitalize()
print('The value of x is {} and y is {}'.format(x,y))
print(b)

#Python Input
num = input('Enter a number')

print('You Entered this number:', num)
print('Data type of num:', type(num))
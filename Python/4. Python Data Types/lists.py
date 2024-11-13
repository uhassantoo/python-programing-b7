'''In Python, a list is a built-in data structure that is used to store an ordered collection of items. Lists are mutable, meaning that their contents can be changed after the list has been created. They can hold a various of data types, including integers, floats, strings, and even other lists.'''

ages = [19,22,25,29]
print(ages)

name = ['Umer', 22 , 'hassan', 12.2]
print(name)

another = ['Umer',28, 'Umer', ['Python',22.2,'Java']]
print(another)

# List Characteristics
#Orderd
#Mutable
# Allow Duplication

lang = ['Python','C++','JAVA','CSS','HTML','JS']

#Access
print(lang)
#Access through index
print(lang[5])

fruits = ['Apple', 200, 'Graphes', 400, 'Orange',300.30]
for fruit in fruits:
    print(fruit)
    
# Lists Methods
#append Method
currency = ['Dollar','AED', 'SAR','EURO','YEN']
print(currency)

currency.append('PKR')
print(currency)

#insert Method

currency.insert(3, 'QAR')
print('After insert Method:', currency)
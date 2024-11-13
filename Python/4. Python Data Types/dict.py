# A Python dictionary is a data structure that stores the value in key: value pairs.
#Create a Dict
country = {
    'Pakistan': 92,
    'UAE':  'Abu Dhabi',
    'ID' : 'pk'
}
#keys must be immutable

#Access
print('Country Details', country.get('ID'))
print('Country :...', country['Pakistan'])

#Add
country['Italy'] = 'Rome'
print(country)
#Implicit Conversion = Automatic type convert

int_num = 123
flt_num = 13.33

newnum = int_num - flt_num
print('Value is : ', newnum)
print('Data Type is :', type(newnum))

#Explicit Conversion Manual Type 
num_string = '123'
num_Int1 = 23
print('Data type of explicit is :', type(num_string))

#manual covert
num_string = int(num_string)
print('Data type of explicit is after :', type(num_string))
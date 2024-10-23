//Single Array
const data = [1,2,3 ,4,5,6]
console.log(data)

// Multi
const data1 = [[1,2,3],[4,5,6],[7,8,9]]
console.log(data1)
//Second
let std1 = ['John', 23]
let std2 = ['Ali',30]
let std3 = ['Imran', 22]

let std_data = [std1,std2,std3]
console.log(std_data)

console.log(std1[1])
console.log(std_data[1])


// Add Element
std_data[1][2] = 'Hello'
console.log(std_data)

// with push
std_data.push(['Umerssss',29])
console.log(std_data)

// For Loop with check the length
for(let i = 0 ; i<std_data.length; i++){
    
    for(let a = 0 ; a<std_data[i].length; a++){
        console.log(std_data[i][a])
    }
}
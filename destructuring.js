// 1. destructuring assignment extracts the values to the specified keys (key1 and key3) from the object obj1 and assigns them to variables with the same names
const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

const { key1, key3} = { ...obj1}

console.log(key1, key3) // 1 1000


// 2. where val1 is assigned the value at index 0 of arr1 ('value1') and val2 is assigned the value at index 1 of arr1 ('value2')
const arr1 = ['value1', 'value2']

const [ val1, val2 ] = arr1

console.log(val1) //value1

console.log(val2) //value2


// 3. Destructuring assignment creates new variables key1 and key3 that are independent of the original object properties. Changing their values does not affect the original object
const obj2 = {'key1': 1, "key2": 2, "key3": 1000}

let { keys1, keys3} = obj2



keys1 = 20;

keys3 = 123

console.log(obj2.key1, obj2.key3) // 1 1000
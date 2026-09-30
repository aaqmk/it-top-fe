console.log('errooorrr40443423425');

const users = [
    {name: 'oleg', age: 19, sex: 'male'},
    {name: 'boris', age: 12, sex: 'male'},
    {name: 'ivan', age: 32, sex: 'male'},
    {name: 'olga', age: 10, sex: 'female'}
]

function filterUnder18(arr){
    return arr.filter((el) => el.age >= 18);
}

console.log(filterUnder18(users));


function findArrSum(arr1, arr2){
    const newarr = arr1.concat(arr2)
    return newarr.reduce((acc, next) => acc + next, 0);
}
console.log(findArrSum([1, 2, 3], [3]));


function findIvan(arr){
    return arr.filter((el) => el.name === 'ivan')
}


function addUser(obj){
    users.push(obj);
}

function modifyUsers(arr){
    return arr.map(user => (user.age++, user)).find(user => user.sex === 'female');
}

console.log(modifyUsers(users));

//closure
function counter(){
    let num = 0;
    return function(){
        num += 1;
        return num;
    }
}

const res = counter()
console.log(res(), 'closure result 1');
console.log(res(), 'closure result 2');
console.log(res(), 'closure result 3');
console.log(res(), 'closure result 4');
console.log(res(), 'closure result 5');
console.log(res(), 'closure result 6');
console.log(res(), 'closure result 7');
console.log(res(), 'closure result 8');
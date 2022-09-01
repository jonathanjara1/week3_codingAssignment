// CODING STEPS

//1

// let ages = [3,9,23,64,2,8,28,93];
// let numbers = ages.map(function(element){
//     return element.age
// });

// console.log(ages);

// let firstElement = ages[ages.length - ages.lenght];
// let lastElement = ages[ages.lenght-1];

// let answer = lastElement - firstElement

// console.log(lastElement);
// console.log(firstElement);
// console.log(answer);

// 2

// const array = [3,9,23,64,2,8,28,93];

// const firstElement = array[array.lenght - array.length];
// const lastElement = array[array.lenght-1];

// const answer = lastElement - firstElement;

// console.log(lastElement);
// console.log(firstElement);
// console.log(answer);

//1


let ages = [3, 9, 23, 64, 2, 8, 28, 93];

let result = ((ages[ages.lenght -1]) - ages[0]);

console.log(result);

//2




let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let total = 0;

for(let i = 0; i < names.length; i++){
    total = total + names[i];
}
    
let average = total / names.length;
console.log(average);
 


//5


let namesArray = ['Kelly', 'Sam', 'Kate'];

let nameLengths = namesArray.map(function(x){
    return x.nameLenghts;
});

console.log(nameLengths);
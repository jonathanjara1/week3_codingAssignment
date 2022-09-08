

//1


let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages);

ages.push(10);

let result = ((ages[ages.length -1]) - ages[0]);

console.log(result);

let total1 = 0;
for(let age of ages) {
    total1 += age;
}
total1 /= ages.length;
console.log(total1);


//2

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log(names);
 console.log("Lenght of names array:", names.length);
// a.

let lettersInNames = 0;

for(let i = 0; i < names.length; i++){
console.log("Index #: ",i, "name", names[i]);
console.log("Index #: ",i, "count", names[i].length);
lettersInNames = lettersInNames + names[i].length;
}

console.log("Sum of letters in names array", lettersInNames); 
let average = lettersInNames / names.length;
console.log("average letters in names array", average);

//b.

console.log(names);
let concatenatedNames = "";
console.log(concatenatedNames)

for(let i = 0; i < names.length; i++) {
    console.log("each name: ", names[i]);
    concatenatedNames = concatenatedNames + names[i] + " ";
}

console.log("Concat names: ",concatenatedNames)


3// Using the array lenght property

4// Using an index, and the first value is accessed unsing index 0



//5 

let nameLenghts = [];
console.log(nameLenghts)

for(let i = 0; i < names.length; i++) {
   console.log("name", names[i]);
   console.log("letter count", names[i].length);
   nameLenghts.push(names[i].length);
}

console.log("Pushed sum of letters of each name to nameLenghts",nameLenghts);



// 6

let total = 0;

for(let i = 0; i < nameLenghts.length; i++){
    console.log("nameLenghts", nameLenghts[i]);
    total = total + nameLenghts[i];
}

console.log("sum of namelenghts array", total);


// 7




// 8

function fullName(firstName, lastName){
    return firstName + " " + lastName;
}

console.log(fullName("Jonathan", "Jaramillo"));



// 9 

let myNumbers = [100, 200, 300, 400];
function sumArray(array) {
    
    

    let sumOfNumbers = 0;

    for(let i = 0; i < array.length; i++) {
        console.log ("printing all numbers of array", array[i]);
        sumOfNumbers = sumOfNumbers + array[i];
    }

    console.log("sum of all numbers in array", sumOfNumbers);

    if(sumOfNumbers > 100){
        return true;
    
    } else {
        return false;
    }


}

console.log(sumArray(myNumbers));


//10

let numberMyNumbers = [1, 2, 3, 4, 5];

function findAverage(arr1){
    let average1 = 0;
    for(let i = 0; i < arr1.length; i++){
        let currentNum = arr1[i];
        average1 += currentNum;
    }
    average1 = average1 / arr1.length;
    return average1
}

console.log(findAverage(numberMyNumbers));

//12


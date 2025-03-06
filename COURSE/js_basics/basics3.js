let marks = Array(6);

let marks2 = new Array(20,40,35,12,37)

let marks3 = [21,43,54,65,77,120]

console.log(marks);
console.log(marks.length);
console.log(marks2);
console.log(marks2.length);
console.log(marks3);
console.log(marks3.length);

marks[3] = 14
console.log(marks);

marks.push(65);
console.log(marks);
marks.pop()
console.log(marks);
console.log("HERE...")
marks2.unshift(12);
console.log(marks2)
console.log(marks.indexOf(12));
console.log(marks.includes(12));
console.log(marks.includes(100));
//marks.slice(2,5);

var sum = 0;
//for(let i=0;i<marks2.length;i++){
//    sum+=marks2[i]
//}

//console.log("SUM "+sum.toString())

//reduce filter map
let total = marks2.reduce((sum,mark) => sum+mark);
console.log(total);


var scores = [12,13,14,16];
let newFilterEvenScores = scores.filter(score=>score%2==0)
console.log(newFilterEvenScores);

//map
let mappedArray = newFilterEvenScores.map(score => score*3);
console.log(mappedArray);

let totalVal = mappedArray.reduce((total,value) => total+=value,0);
console.log(totalVal);

//Chaining
var scores1 = [12,13,14,16];
let sumValue = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((total,value)=> total+=value,0);

console.log(sumValue);

//sort
let fruits = ["Banana","Mango","Pomegrante", "Apple"]
fruits.sort()
console.log(fruits);

var scores2 = [12,3,19,16,14];
// console.log(scores2.sort())
// scores2.sort(function(a,b){
//     return a-b;
// })

console.log(scores2.sort((a,b)=>a-b));



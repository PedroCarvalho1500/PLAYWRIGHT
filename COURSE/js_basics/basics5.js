let day = 'tuesday';
console.log(day.length);

let subDay = day.slice(0,4);
console.log(subDay);
console.log(day[1]);

let splitDay = day.split("s");
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);

let date = '23';
let nextDate= '27';
let diff = parseInt(nextDate) - parseInt(date);
console.log(diff);
diff.toString();

let newQuote = day + "is Sunday";
console.log(newQuote);

let val=newQuote.indexOf("day",5);
console.log(val);

let count = 0
let val2 = newQuote.indexOf("day");
while(!val2 == -1){
    count++;
}
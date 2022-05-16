/*
let str = "Hello";
str.test = 5; 
alert(str.test);
//этот код не работает, потому примитивы это не объекты и не могут хранить дополнительные данные
*/

/*
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert( a + b );
 */

/*
alert( 1.35.toFixed(1) ); // 1.4
alert( 6.35.toFixed(1) ); // 6.3 ->6.4
alert( Math.round(6.35 * 10)/10);
*/

/*
function readNumber (){
    let num;
    do{
        num = +prompt("Please enter your number");
    }while(!isFinite(num));
    
    if (num === null || num === "") return null;
    return num;
}
alert(readNumber());
*/

/*
function random(min, max) {
    return min + Math.random() * (max - min);
}
  
alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));
*/

/*
function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
  
alert( randomInteger(1, 3) );
*/

/*
function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1);
}  
alert( ucFirst("john") ); // John
*/

/*
function checkSpam(str) {
    let newstr = str.toLowerCase();
    return newstr.includes('viagra') || newstr.includes('xxx');
}
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
*/

/*
function truncate(str, maxlength) {
    if (str.length > maxlength) return str.slice(0, maxlength - 1) + '…';
    return str;
}
alert(truncate("What I'd like to tell on this topic is:", 20));

alert(truncate("Hi everyone!", 20));
*/

/*
function extractCurrencyValue(str) {
    return +str.slice(1);
}

function extractCurrencyValue1(str){
    return str.slice(1);
}

alert( extractCurrencyValue1('$120'));
*/

/* 
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
*/

/* 
let style = ["Jazz", "Blues"];
style.push("Rock-n-Roll"); // add element at the end
style[Math.floor((style.length - 1) / 2)] = "Classics";
style.shift(); // delete first element
style.unshift("Rap", "Reggae"); // add element
*/

/*
function sumInput() {
    let numbers = [];
    while (true) {
      let value = +prompt("A number please?", 0);
      if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(value);
    }

    let sum = 0;
    for (let num of numbers){
      sum += num;
    }
    return sum;
}
alert(sumInput());
*/

/*
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partSum = 0;
  
    for (let num of arr) { 
      partSum += num; 
      maxSum = Math.max(maxSum, partSum); 
      if (partSum < 0) partSum = 0;
    }
    return maxSum;
}
  
alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
*/

/*
function camelize(str) {
    return str
      .split('-')
      .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('');
}
*/

/*
function filterRange(arr, a, b){
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values);
alert( arr ); // 5,3,8,1 (not modified);
*/

/*
function filterRangeInPlace(arr, a, b){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= b || arr[i] <= a){
            arr.splice(i, 1);
        }
    }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); 
alert( arr ); 
*/

/*
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert(arr); 
*/

/*
function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

alert(sorted);
alert(arr);
 */

function Calculator(){
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    }

    this.calculate = function(str){
        let split = str.split(" "),
        a = +split[0],
        b = +split[2],
        op = split[1]

        if (!this.methods[op] || isNaN(a) || isNaN(b)){
            return NaN;
        }
        return this.methods[op](a, b);
    }
    this.addMethod = function(name, fun){
        this.methods[name] = func;
    }
}

/*
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result);
*/

/*
let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let users = [john, pete, mary];
let names = users.map(item => item.name);

alert( names );
*/

/*
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => ({
    fullname: `${user.name}` `${user.surname}`, id: user.id
}));

alert( usersMapped[0].id ); 
alert( usersMapped[0].fullname ); 
*/

/*
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}
  
let john = {name: "John", age: 25 };
let pete = {name: "Pete", age: 30 };
let mary = {name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

alert(arr[0].name); 
alert(arr[1].name); 
alert(arr[2].name); 
*/

/*
function shuffle(array){
    array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);
*/

/*
function getAverageAge(users) {
    return users.reduce((total, user) => total + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

alert( getAverageAge(arr));
*/

/*
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"];

alert( unique(strings) );
*/

/*
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    },{})
}
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31}];
  
let usersById = groupById(users);
*/

/*
function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) );
*/

/*
function aclean(arr){
    let map = new Map();

    for (let word of arr){
        let sorted = word
                        .toLowerCase()
                        .split('')
                        .sort()
                        .join('');
        map.set(sorted, word);
    }
    return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );
*/

/*
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
  
let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]); //2 сообщ прочитаны

readMessages.add(messages[0]);
alert("Read message 0: " + readMessages.has(messages[0])); // true
  
let readMap = new WeakMap();
readMap.set(messages[0], new Date(2017, 1, 1));
*/

/*
function sumSalaries(obj){
    let result = 0;
    for (let i of Object.values(obj)){
        result += i;
    }
    return result;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) ); 
*/

/*
function count(obj){
    return Object.keys(obj).length;
}

let user = {
    name: 'John',
    age: 30
};
alert( count(user) );
*/

/*
let user = {
    name: "John",
    years: 30
};
let {name, years: age, isAdmin = false} = user;
alert( name );
alert( age );
alert( isAdmin );
*/

/*
function topSalary(obj){
    let maxS = 0;
    let topP = null;
    for (const[name, salary] of Object.entries(obj)){
        if (salary > maxS){
            maxS = salary;
            topP = name;
        }
    }
    return topP;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(topSalary(salaries));
*/

/*
let d = new Date(2012, 1, 20, 3, 12); // месяц указываем на -1
alert(d);
*/

/*
function getWeekDay(d){
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[d.getDay()];
}

let d = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(d));
*/

/*
function getLocalDay(d){
    let days =  [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[d.getDay()];
}*/
/*
function getLocalDay(d) {
    let day = d.getDay();
    if (day == 0) {
      day = 7;
    }
    return day;
  }

let d = new Date(2012, 0, 3); 
alert( getLocalDay(d) );
*/

/*
function getLastDayOfMonth(y, m){
    let date = new Date(y, m + 1, 0);
    return date.getDate();
}
alert(getLastDayOfMonth(2012, 0));
*/


//CHECK AGAIN!!!
/*
function getSecondsToday() {
  let now = new Date();

  // create an object using the current day/month/year
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // ms difference
  return Math.round(diff / 1000); // make seconds
}

alert( getSecondsToday() );
*/

/*
function getSecondsToTomorrow() {
  let now = new Date();

  // tomorrow date
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  let diff = tomorrow - now; // difference in ms
  return Math.round(diff / 1000); // convert to seconds
}
*/
/*
function formatDate(date) {
  let diff = new Date() - date; // the difference in milliseconds

  if (diff < 1000) { // less than 1 second
    return 'right now';
  }

  let sec = Math.floor(diff / 1000); // convert diff to seconds

  if (sec < 60) {
    return sec + ' sec. ago';
  }

  let min = Math.floor(diff / 60000); // convert diff to minutes
  if (min < 60) {
    return min + ' min. ago';
  }

  // format the date
  // add leading zeroes to single-digit day/month/hours/minutes
  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2)); // take last 2 digits of every component

  // join the components into date
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.2016 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
 */

/*
let user = {
  name: "John Smith",
  age: 35
};

let json = JSON.parse(JSON.stringify(user));
alert(json);
*/


let room = {
    number: 23
};
  
let meetup = {
title: "Conference",
occupiedBy: [{name: "John"}, {name: "Alice"}],
place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value){
    if (key != "" && value == meetup) return undefined;
    return value;
}));

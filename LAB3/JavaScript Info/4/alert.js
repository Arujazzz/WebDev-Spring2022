let user = {}
user.name = "John",
user.surname = "Smith"
user.name = "Pete";
delete user.name;

/*
function check(obj){
    for (let key in obj) return false;
    return true;
}

let schedule = {};
alert(check(schedule) ); // true

schedule["8:30"] = "get up";
alert(check(schedule) ); // false
*/

/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries){
    sum += salaries[key];
}
alert(sum);
*/

/*
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multnum(obj){
    for (let key in obj){
        if (typeof obj[key] == 'number'){
            obj[key] *= 2;
        }
    }
}
multnum(menu); 
alert(menu.width);
alert(menu.height);
*/

/*
function makeUser() {
    return{
      name: "John",
      ref: this
    };
} 
let user = makeUser();
alert( user.ref.name ); // ошибка, потому user.ref вызывается как функция

function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }
  
  let user = makeUser();
  
  alert( user.ref().name ); // John
*/

/*
let calculator = {
    read(){
        this.a = +prompt("Enter your first number");
        this.b = +prompt("Enter your second number");
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    } 
}
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

/*
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
};

ladder
    .up()
    .up()
    .down()
    .showStep()
    .down()
    .showStep();
*/ 

/*
function A() {};
function B() {};

let a = new A;
let b = new B;

alert( a == b ); // true (= new A() == new B())
*/

/*
let calculator = new Calculator();
calculator.read();

alert(calculator.sum() );
alert( calculator.mul() );

function Calculator(){
    this.read = function(){
        this.a = +prompt("Enter your first number");
        this.b = +prompt("Enter your second number");
    },
    this.sum = function(){
        return this.a + this.b;
    },
    this.mul = function(){
        return this.a * this.b;
    }
}
*/

/*
function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value += +prompt("Сколько добавить?");
    }
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
*/

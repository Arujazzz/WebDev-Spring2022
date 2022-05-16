/*
let a = 1, b = 1;

let c = ++a; 
let d = b++; 
alert(a);//2
alert(b);//2
alert(c);//2
alert(d);//1
*/

/*
let a = 2;

let x = 1 + (a *= 2);

alert(a) //4
alert(x) //5
*/

/*
let s1 = "" + 1 + 0;
alert(s1);// string 10

let s2 = "" - 1 + 0;
alert(s2);//num -1

let s3 = true + false;
alert(s3); //1

let s4 = 6 / "3";
alert(s4);// num 2

let s5 = "2" * "3";
alert(s5);//num 6

let s6 = 4 + 5 + "px";
alert(s6);//string 9px

let s7 = "$" + 4 + 5;
alert(s7);// string &45 

let s8 = "4" - 2;
alert(s8);//num 2

let s9 = "4px" - 2;
alert(s9);//NaN

let s10 = "  -9  " + 5;
alert(s10);//string -9 +5

let s11 = "  -9  " - 5;
alert(s11);//num -14

let s12 = null + 1;
alert(s12);//1

let s13 = undefined + 1;
alert(s13);//NaN

let s14 = " \t \n" - 2;
alert(s14);//-2
*/

let a = +1;
let b = +2;
prompt("First number?", 1);
prompt("Second number?", 2);

alert(a + b); 

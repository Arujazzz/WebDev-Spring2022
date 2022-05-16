/*
let i = 3;

while (i) {
  alert( i-- );
} // 1
*/

/*
let i = 0;
while (++i < 5) alert( i ); // 1, 2, 3, 4


let i = 0;
while (i++ < 5) alert( i ); //1, 2, 3, 4, 5
*/

/*
for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i ); 
// 0, 1, 2, 3, 4
*/

/*
for (let i = 2; i <= 10; i++){
    if (i%2 == 0){
        alert(i);
    }
}
*/

/*
let i = 0;
while (i < 3){
    alert( `number ${i}!`);
    ++i;
}
*/
/*
let num;
do {
    num = prompt("Please enter your number greater than 100!");
}while (num < 100 && num);
*/

let n = prompt("Enter your number", "")
for (let i = 2; i <= n; i++){
    let isPrime = 0;
    for (let j = 2; j <= i/2; j++){
        if (i%j == 0){
            isPrime = 1;
            break;
        }
    }
    if (isPrime == 0){
        alert(i);
    }

}

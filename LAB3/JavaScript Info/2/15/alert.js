/*
function check(age){
    return (age > 18) || confirm("Did parents allow you?");
}
check (16);
*/
/*
function check2(age){
    return (age > 18) ? true : confirm("Did parents allow you?");
}
check2 (20);
*/

/*
function min(a, b){
    if (a > b) return b;
    else return a;
}
confirm(min (51, 48));
*/

function pow(x, n){
    let ans = x;
    for (let i = 1; i < n; i++){
        ans *= x;
    }
    return ans;
}

function pow2(x, n){
    return x**n;
}

let x = prompt("enter x");
let n = prompt("enter n");

if (n < 1){
    alert("Please enter positive integer");
}else alert(pow(x, n)); // or alert(pow2(x, n));

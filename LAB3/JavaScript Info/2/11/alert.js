/*
alert( null || 2 || undefined ); // ans = 2 because first truthy value.
*/

/*
alert( alert(1) || 2 || alert(3));// 1 and then 2
*/
/*
alert( 1 && null && 2 ); //null, because first falsy value
*/

/*
alert( alert(1) && alert(2) ); // 1, then indefined 
*/

/*
alert( null || 2 && 3 || 4 ); // ans is 3, because first truthy value after null (null || 3 || 4)
*/

/*
let age = prompt();
if (age >= 14 && age <=90){
    alert('OK');
}
*/

/*
let age = prompt();
if (!(age >= 14 && age <=90)){
    alert('OK');
}
*/
/*
let age = prompt();
if (age < 14 || age > 90)){
    alert('OK');
*/
/*
if (-1 || 0) alert( 'first' ); // run, -1 (false ||)
if (-1 && 0) alert( 'second' ); //doesnt run, 0 (false &&)
if (null || -1 && 1) alert( 'third' ); //run, 1 
*/

/*
let user = prompt("Who's there?", '');

if (user === "Admin"){
    let password = prompt('Password?', '');
    if (password === "TheMaster"){
        alert('Welcome!');
    }
    else if (pass === null || pass === ""){
        alert('Canceled!');
    }
    else{
        alert('Wrong password!');
    }
}

else if (user === null || user === ""){
    alert('Canceled!');
}
else{
    alert('I dont know you!');
}
*/

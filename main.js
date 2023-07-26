const num1 = prompt("Inserire il primo numero :");

const numInt1 = parseInt(num1);

const num2 = prompt("Inserire il secondo numero :");

const numInt2 = parseInt(num2);



if(numInt1 > numInt2){
    let numBet = Math.round(Math.random()*numInt1)+numInt2;
    console.log(numBet);
}
else{
    let numBet = Math.round(Math.random()*numInt2)+numInt1;
    console.log(numBet);
}


// const num1 = prompt("Inserire il primo numero :");

// const numInt1 = parseInt(num1);

// const num2 = prompt("Inserire il secondo numero :");

// const numInt2 = parseInt(num2);



// if(numInt1 > numInt2){
//     let numBet = Math.round(Math.random()*(numInt1 - numInt2))+numInt2;
//     console.log(numBet);
// }
// else{
//     let numBet = Math.round(Math.random()*(numInt2 - numInt1))+numInt1;
//     console.log(numBet);
// }

// const word1 = prompt("Inserire la prima parola");

// const word2 = prompt("Inserire la seconda parola");

// if(word1 == word2 || word1.length == word2.length){
//     console.log(word1);
//     console.log(word2);
// }
// else if(word1.length > word2.length) {
//     console.log(word1);
// }
// else if(word1.length < word2.length) {
//     console.log(word2);
// }


const numbers = [];

let sum = 0;



// while(sum <= 50){
//     const num = prompt("Inserire un numero :");
//     const numInt = parseInt(num);
    
//     if(numInt > 50){
//         let stop = alert("somma troppo alta");
//     }
    
    
//     else if(sum < 50) {
//         sum += numInt;
//         numbers.push(numInt);
//         console.log(sum);
//         console.log(numbers);
//     }
    
//     else if(sum >= 50){
//         let stop = alert("somma troppo alta");
//     }
// }
let media = 0;

while(sum <= 50){
    const num = prompt("Inserire un numero :");
    const numInt = parseInt(num);
    
    if(numInt > 50){
        let stop = alert("somma troppo alta");
    }
    
    
    else if(sum < 50) {
        sum += numInt;
        numbers.push(numInt);
        const media = sum / numbers.length;
        console.log(media);        
        console.log(sum);
        console.log(numbers);
    }
    
    else if(sum >= 50){
        let stop = alert("somma troppo alta");
    }
    
}








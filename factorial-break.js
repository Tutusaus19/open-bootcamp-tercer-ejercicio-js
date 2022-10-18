let factorial = 1 ;
let increment = 1; 

factorial: while (true){ 
    factorial *= increment;
    increment ++;
    if (increment > 10){
        break factorial
    }
}
console.log(`El factorial de 10 es: ${factorial}`)
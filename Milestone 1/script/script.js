//contatore 1-100
for (let i = 1; i <= 100; i++) {

    //identificatore fizz,buzz & fizzbuzz    
    let multiplo = i; // undefined

    if (i % 3 === 0) {
        multiplo = "Fizz";

    } if (i % 5 === 0) {
        multiplo = "Buzz";

    } if (i % 3 === 0 && i % 5 === 0) {
        multiplo = "FizzBuzz";
    }
    //stampa nella console
    console.log(multiplo);
}






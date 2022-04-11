
// contatore 1-100

for (let i = 0 ; i <= 100; i++ ) {
   
// identificatore fizz,buzz & fizzbuzz    
    let multiplo ;
    if (i % 3 === 0) {
        multiplo = "Fizz" ;
       
    } if (i % 5 === 0) {
        multiplo = "Buzz" ;
       
    } if (i % 3 === 0 && i % 5 === 0 ) {
        multiplo ="FizzBuzz" ;
    }

    console.log(i, multiplo);

    } 






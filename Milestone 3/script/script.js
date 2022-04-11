//prelievo wrapper da html
const rowWrapper = document.getElementById ("wrapper") ;

//contatore 1-100
for (let i = 1 ; i <= 100; i++ ) {
   
//identificatore fizz,buzz & fizzbuzz    
    let multiplo = i; // undefined

    if (i % 3 === 0) {
        multiplo = "fizz" ;
       
    } if (i % 5 === 0) {
        multiplo = "buzz" ;
       
    } if (i % 3 === 0 && i % 5 === 0 ) {
        multiplo = "fizzbuzz" ;
    }
    //stampa nell'html
    rowWrapper.innerHTML +=  `<div class="box ${multiplo}">${multiplo}</div>` 
} 






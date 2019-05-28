import { sum, greet } from './functions';

( function(){
    const num1 = 10, num2 = 20, theName = 'Alan';

    console.log( sum(num1, num2) );
    console.log( greet(theName) );
    
} )();
function myFunction()
{
    //              ---- COERSION ----
    /*
    In this example the number is converted to a 
    String, '10' and then the "+" character 
    concatenates both Strings 
    */
    let x = 10 + '20';
    let y = 20 + '10';
    let w = '20' + 10;
    /*
    Here the Boolean value is converted to a String
    "true" and then the '+' character concatenates
    both the Strings
        */
    let z = true + '10';

    document.getElementById( "coercionId" ).innerHTML = w
}


//              ---- INFINITY_-INFINITY ----
function testProperty()
{
    // var x = 1.797693134862315E+308;
    var x = -1.797693134862315E+308;
    var y = x * 1.001;

    document.getElementById( "test" ).innerHTML = y;
}


//              ---- BOOLEAN_COMPARISON ----
function checkBooleanExpression()
{
    // var x = 10;
    // var y = 9;

    //              ---- RETURNS_TRUE ----
    // document.getElementById( "demo" ).innerHTML = x > y;

    //              ---- RETURNS_FALSE_WITH_HTML ----
    document.getElementById( "demo" ).innerHTML = Boolean( 9 > 10 );
    
    //              ---- RETURN_FALSE_IN_THE_CONSOLE ----
    // console.log( Boolean( 9 > 10 ) );
}

//              ---- RETURN_FALSE_IN_THE_CONSOLE ----
console.log( Boolean( 9 > 10 ) );

// console.log( 2 + 2 );
function mathConsole()
{
    let x = 10;
    let y = 20;

    let z = y / x;

    document.getElementById( "testId" ).innerHTML = z;
    console.log( 20 / 10 );
}


//              ---- VOTING_AGE_COMPARISON ----
function voteableAgeComparison()
{
    /**                 ---- LET_VARIABLES ----
     * Declare "let" variables: These are block-scoped variable. These
     * variables can only Exist (to be used) within this function-block.
    */              
    
   let voteableAge;
   let age;

   /**
    * instruct the user to enter his/her age as an "int" (whole number).
    * retreive the value and assign it tot he id "age".
    */
    //    If, users data is not a number. Display this message
    if ( isNaN( age ) )
    {
        voteableAge = "Invalid Entry! ";
    }
    else
    {
        /**
         * If, voteableAge, is under 18. Output String (flase),
         * following the "question mark (?) char", is displayed. 
         * Else, if over 18. Output String (true), following the 
         * "double colon (:) char", is displayed
         */
        voteableAge =  ( age < 18 ) ? "False: Too young. " : "True: Old enough. ";
    }

    document.getElementById( "ageId" ).innerHTML = voteableAge + "To Vote!";

}


//              ---- TRIPLE_EQUAL_SIGN_ASSIGNMENT ----
function tripleEqualSign()
{
    var varA = 18;
    var varB = 18;
    var varC = "Krunch!";
    var varD = 'ten';
    var varE = 10;

    var sign1 = varA === varB; 
    var sign2 = varC === varD;
    var sign3 = varD === varE;
    var sign4 = varC === "crunch"

    //              ---- MATCHING_DATA_TYPE_&_VALUE ----
    document.getElementById( "signId-1" ).innerHTML = sign1;

    //              ---- DIFFERENT_DATA_TYPE_&_DIFFERENT_VALUE ----
    document.getElementById( "signId-2" ).innerHTML = sign2;

    //              ---- DIFFERENT_DATA_TYPE_SAME_VALUE ----
    document.getElementById( "signid-3" ).innerHTML = sign3;

    //              ---- SAME_DATA_TYPE_DIFFERENT_VALUE ----
    document.getElementById( "signId-4" ).innerHTML = sign4;
    
}


//              ---- AND(&&)_OR(||)_NOT(!)_OPERATORS ----
//              ---- AND(&&)_OPERATOR_FUNCTION ----
function andOperator()
{
    let firstVar = 25;
    let secondVar = 18;

        document.getElementById( "andId" ).innerHTML = 
        ( firstVar < 30 && secondVar > 15 ) + "<br>" 
        + ( firstVar < 30 && secondVar < 15 );
}


//              ---- AND(&&)_OR(||)_NOT(!)_OPERATORS ----
//              ---- OR(||)_OPERATOR_FUNCTION ----
function orOperator()
{
    let firstVar = 25;
    let secondVar = 18;

        document.getElementById( "orId" ).innerHTML = 
        ( firstVar == 20 || secondVar == 25 ) + "<br>" 
        + ( firstVar == 25 || secondVar == 15 ) + "<br>" 
        + ( firstVar == 0 || secondVar == 18 ) + "<br>"
        + ( firstVar == 25 || secondVar == 0 );
}



//              ---- AND(&&)_OR(||)_NOT(!)_OPERATORS ----
//              ---- NOT(!)_OPERATOR_FUNCTION ----
function notOperator()
{
    let firstVar = 25;
    let secondVar = 18;

        document.getElementById( "notId" ).innerHTML = 
        !( firstVar === secondVar ) + "<br>" 
        + !( firstVar > secondVar );
}



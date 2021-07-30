//! Closure is not a function
//! Closure is not created when you return a function
//* Closure is a dictionary
//* closure is created when you access a variable outside function

function zoo() {
    const tiger = "Zinda hai";
    const lion = "marega";

    function cage() {
        //? tiger is NOT defined in cage
        //? tiger is outside lexical environment
        console.log("tiger", tiger); //? so its captured
    }

    return cage; //! All local variables must be destroyed - tiger and lion
}

const pinjara = zoo();
pinjara();
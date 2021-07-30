//? ...args is called as rest params
//? Arrow function does nopt get arguments so it has to use rest params
const sum = (...args)=> { //$ ... in definition is "rest"
    let total = 0;
    for (let index = 0; index < args.length; index++) {
        total += args[index];
        
    }
    return total;
}

const result = sum(1,2,3,4,5);

const array = [1,2,3,4,5];
const resultSpread = sum(...array); //$ ... in call is "spread"
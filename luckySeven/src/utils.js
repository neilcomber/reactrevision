const roll = () => Math.floor(Math.random() * 6) + 1;

const getRolls = (n) => {
    return Array.from({length:  n}, ()=> roll())
}

const sum = (arr) => {
    return arr.reduce((sum, el) => sum += el)
}

export {getRolls, sum};


const convertToBaby = arr => {
    const babyArray = [];
    for (let i = 0; i < arr.length; i++){
        babyArray.push('Baby' + ' ' + arr[i]);
    }
    return babyArray;
}

const convertToAdult = arr => {
    const adultArray = [];
    for (let i = 0; i < arr.length; i++){
        adultArray.push('Adult' + ' ' + arr[i]);
    }
    return adultArray;
}

const convertToDead = arr => {
    const deadArray = [];
    for (let i = 0; i < arr.length; i++){
        deadArray.push('Dead' + ' ' + arr[i])
    }
    return deadArray;
}


const convertCurrency = arr => {
    const moneyType = [];
    for (let i = 0; i < arr.length; i++){
        moneyType.push('£' + arr[i]);
    }
    return moneyType;
}

const counter = arr => {
    const numbers = [1,2,3,4,5];
    for (let i = 0; i >= 5; i++)
    return numbers;
}
const currency = ['100', '200', '300', '400', '500'];
const animals = ['cat', 'dog', 'elephant', 'tiger', 'monkey'];
animals.push('human');
console.log(convertToBaby(animals));
console.log(convertToAdult(animals));
console.log(convertToDead(animals));
console.log(convertCurrency(currency));
console.log(this.numbers);
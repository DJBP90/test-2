
const sortWages = [
    {employee: 'Mike', wages: 250},
    {employee: 'Steve', wages: 650},
    {employee: 'Paul', wages: 150},
    {employee: 'John', wages: 1250},
    {employee: 'Ryan', wages: 1000},
    {employee: 'David', wages: 2500}
];

const rankWages = arr => arr.sort((wagesObj1, wagesObj2) => wagesObj1.wages > wagesObj2.wages)

console.log(rankWages(sortWages));


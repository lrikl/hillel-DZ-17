'use strict';

const company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function salaryAmount(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return 0;
    }

    let salarySum = 0;

    for (const key in obj) {
        const valueKey = obj[key];

        if (Array.isArray(valueKey)) {
            valueKey.forEach(employee => {
                salarySum += employee.salary || 0;
            });
            
        } 
        else {
            salarySum += salaryAmount(valueKey);
        }
    }

    return salarySum;
}

console.log(salaryAmount(company));
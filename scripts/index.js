
//  SMALL EXERCISES

function isSevere(item) {
    if (item.severity >= 4) {
        return true;
    } else {
        return false;
    }
}

function isOpen(item) {
    if (item.status === "open") {
        return true;
    } else {
        return false;
    }
}

function isMeh(item) {
    if (item.severity < 4) {
        return true;
    } else {
        return false;
    }
}

function numCasesOpen(object) {
    let filteredArray = object.cases.filter(isOpen);
    return filteredArray.length;
}

// console.log(numCasesOpen(database));

function numCasesSevere(object) {
    let filterArray = object.cases.filter(isSevere);
    return filterArray.length;
}

// console.log(numCasesSevere(database));

function numMehCases(object) {
    let filteredArray = object.cases
                                .filter(isMeh)
                                .filter(isOpen)
    return filteredArray;
}

// console.log(numMehCases(database));



// MEDIUM EXERCISES



function hasNoDuplicate(offense) {
    let numOccurances = 0;
    for (let item of database.cases) {
        // console.log(item.title);
        if (item.title === offense) {
            numOccurances += 1;
        }
    }
    // console.log(numOccurances);
    if (numOccurances === 1) {
        return true;
    } else {
        return false;
    }
}

// (hasNoDuplicate("Playing with matches"));

function createTitleArray(object) {
    let newArray = [];
    for (let item of object.cases) {
        newArray.push(item.title);
    }
    return newArray;
}

const caseArray = database.cases;
const titlesArray = createTitleArray(database);

// for (let el of titlesArray) {
//     hasNoDuplicate(el);
// }

function returnUniqueOffenses() {
    let uniqueArray = titlesArray.filter(hasNoDuplicate);
    return uniqueArray;
}

// console.log(returnUniqueOffenses(database));

function parseCases(object) {
    for (let item of object.cases) {
        console.log(item);
    }
}

function coalPerPerson(caseArray) {
    const result = [];
    for (let item of caseArray) {
        // console.log(item.name);
        let numCoals = item.coals.reduce((a, b) => a + b);
        let entry = 
            {
                name: item.name,
                coals: numCoals
            }
    }
    console.log(result);
}


function crimesPerPerson(caseArray) {
    const result = {};
    for (let item of caseArray) {
        // console.log(item.name);
        if (result[item.name]) {
            let currentValue = result[item.name];
            let newValue = currentValue + 1;
            result[item.name] = newValue;
            
        } else {
            result[item.name] = 1;
        }
    }
    console.log(result);
}



crimesPerPerson(caseArray);








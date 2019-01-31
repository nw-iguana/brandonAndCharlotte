// Drill 1


function yearOfBirth(age) {
    if (age < 0){
        throw new Error("Age can not be negative");
    }
    else {
        return 2019 - age;
    }
}

function createGreeting(name, age) {
    if (name === undefined || age === undefined) {
        throw new Error("Arguments not valid.");
    }
    else if (isNaN(age)) {
        throw new TypeError("Age must be a number");
    }
    else if (typeof name !== "string") {
        throw new TypeError("Name must be a string");
    }
    const yob = yearOfBirth(age);
    return `"Hi my name is ${name} and I'm ${age}. I was born in ${yearOfBirth}"`;
}

try {
    const greeting1 = createGreeting("Brandon", -6);
    console.log(greeting1);
    const greeting2 = createGreeting("Brandon", 33);
    console.log(greeting2);
}
catch(e) {
    console.error(e.message);
}


// Drill 2

function jediName(firstName, lastName) {
    return lastName.slice(0, 3) + firstName.slice(0, 2);
}

function beyond(num) {
    if (isFinite(num) && num > 0) {
        console.log('To infinity');
    }
    if (isFinite(num) && num < 0) {
        console.log('To negative infinity');
    }
    if (num === 0) {
        console.log('Staying home');
    }
    else {
        console.log('And beyond');
    }
}

function decode(word) {
    let array = word.split(" ");
    const hiddenMessage = [];
    // how to break string into array with individual words????

    for (let i = 0; i <= word.length; i++) {
        const hiddenMessage = word[i];
        if (word[0] === 'a') {
            return word[1];
        }
        if (word[0] === 'b') {
            return word[2];
        }
        if (word[0] === 'c') {
            return word[3];
        }
        if (word[0] === 'd') {
            return word[4];
        }
        else {
            return ' ';
        }
    }
    return hiddenMessage;
}

decode('craft block argon meter bells brown croon droop');


function daysInAMonth(month, leapYear) {
    switch(month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            console.log(month + ' has 31 days.');
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            console.log(month + ' has 30 days.');
            break;
        default:
            throw new Error('Must provide a valid month.');
            break;
    }
    // what to do with february???????????????
}



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




function yearOfBirth(age) {
    return 2019 - age;
}

function createGreeting(name, age) {
    const yob = yearOfBirth(age);
    return `"Hi my name is ${name} and I'm ${age}. I was born in ${yearOfBirth}"`;
}

const greeting1 = createGreeting();
console.log(greeting1);


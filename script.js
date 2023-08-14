// const bioData = {
//     name : 'Hriday',
//     age : 21,
//     designation : 'Software Engineer'
// }
// console.log(`My name is ${bioData.name} and my Designation is ${bioData.designation}`);


// const bioData = {
//     name : 'Hriday',
//     age : 21,
//     desig : 'Software Engineer'
// }

// let {name,age,desig} = bioData;
// console.log(`My name is ${name} and my designation is ${ desig}`);

const bioData = {
    name : 'Hriday',
    age : 21,
    desig : 'Software Engineer',
    hobb : {
        first : 'Learning',
        second : 'coding'
    }
}

let {name,age,desig, hobb} = bioData;
console.log(`My name is ${name} and my designation is ${desig}
My first hobbie is ${hobb.first}`);
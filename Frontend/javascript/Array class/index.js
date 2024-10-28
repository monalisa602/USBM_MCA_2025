// let newArray=[]
// console.log(typeof newArray);
// let name ="ashish";
// let age = 23;
// let profession = "criminal";
// let ismarried = true;

// let userArray = ["ashish",23,"criminal",true];
// console.log(userArray);

// let newNumber = new Array(1,2,3,4,5,6);
// console.log(newNumber.length);

let cities = ["bhubaneswar","mumbai","kolkata"];
console.log(cities[0]);
// console.log(cities[cities.length-2]);

// let lastcity = (cities.length-1);
// console.log(lastcity)

//add element
console.log(cities);
let addcity = "jagatsinghpur";
cities.push(addcity);
console.log(cities)


//modify element
console.log(cities);
let modifycity ="kendrapada";
cities[3] = modifycity;
console.log(cities);

//delete
let deletecity = "kendrapada";
cities.pop(deletecity);
console.log(cities);

//remove

cities.pop();
console.log(cities);



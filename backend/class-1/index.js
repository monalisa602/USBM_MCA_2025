//node.js


//custom modules
const math = require("./math");
const fs =require("fs");


console.log(math.add(5,6));
console.log(math.sub(11,6));
console.log(math.mul(10,10));
console.log(math.div(4,2));
//in-built modules
console.log(fs);
//write file
fs.writeFileSync("notes.txt","i am learning backend");
fs.writeFileSync("we.txt","i am monalisa patra");

//append file
fs.appendFileSync("notes.txt","i am learning backend \n");
fs.appendFileSync("notes.txt","i am monalisa\n");

//read file
const data = fs.readFileSync("notes.txt");
console.log(data.toString());

//create folder
// fs.mkdirSync("node.js");
//rename folder
// fs.renameSync("node.js" , "no.js");

//delete folder
fs.rmdirSync("no.js");


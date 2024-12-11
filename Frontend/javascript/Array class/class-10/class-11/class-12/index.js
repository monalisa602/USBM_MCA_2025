// console.log("start");
// console.log("middle");
// console.log("end");

// console.log("start");
// setTimeout(() => {
//     console.log("middle")}, 2000);

// console.log("end");

fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((res) => console.log(res))
.catch((error) => console.log(error));

//using async/await with fetch

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
       
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
    


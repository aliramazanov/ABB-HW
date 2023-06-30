/* What is destructuring ?

Destructuring is one of the methods could be very useful if used correctly.
It basically let us to destruct object values and assign them into separate variables
Destructuring can save time, make code more readable. If we have an object already, 
we can assign it to a variable using for example const(let) {key, key, ...} = objName
We can use (...) rest pattern to make changes on different parts of it, combine objects(arrays)
into one, add more parameters, and etc.

*/

/* Task 1

Two companies have decided to merge, and they need to combine their customer databases.
You have two arrays of strings, each containing customer surnames. 
Create a new array based on these arrays, which will be the 
combination of the two arrays without any duplicate surnames.*/

const clients1 = [
  "Gilbert",
  "Salvatore",
  "Pierce",
  "Summers",
  "Forbes",
  "Donovan",
  "Bennett",
];

const clients2 = ["Pierce", "Zaltzman", "Salvatore", "Michaelson"];

const allClients = [...new Set([...clients1, ...clients2])];
console.log(allClients);

/* Task 2 
You have an array called characters which consists of objects. Each object describes a character.
Create an array charactersShortInfo based on it, 
which consists of objects with only 3 fields - name, surname, and age.
*/

const characters = [
  {
    name: "Elena",
    lastName: "Gilbert",
    age: 17,
    gender: "woman",
    status: "human",
  },
  {
    name: "Caroline",
    lastName: "Forbes",
    age: 17,
    gender: "woman",
    status: "human",
  },
  {
    name: "Alaric",
    lastName: "Saltzman",
    age: 31,
    gender: "man",
    status: "human",
  },
  {
    name: "Damon",
    lastName: "Salvatore",
    age: 156,
    gender: "man",
    status: "vampire",
  },
  {
    name: "Rebekah",
    lastName: "Mikaelson",
    age: 1089,
    gender: "woman",
    status: "vampire",
  },
  {
    name: "Klaus",
    lastName: "Mikaelson",
    age: 1093,
    gender: "man",
    status: "vampire",
  },
];

const charactersImportantInfo = characters.map(({ name, lastName, age }) => ({
  name,
  lastName,
  age,
}));

console.log(charactersImportantInfo);

/* Task 3

Write a destructuring assignment that:

assigns the property name to a variable name
assigns the property years to a variable age
assigns the property isAdmin to a variable isAdmin with a default value 
of false if the property doesn't exist in the object
Display the variables on the screen. */

const user1 = {
  name: "John",
  years: 30,
};

const { name: nameOfUser, years: ageOfUser, isAdmin = false } = user1;
console.log(nameOfUser, ageOfUser);
console.log(`Is ${nameOfUser} admin: ${isAdmin}`);

/* Task 4 */

const satoshi2020 = {
  name: "Nick",
  surname: "Sabo",
  age: 51,
  country: "Japan",
  birth: "1979-08-21",
  location: {
    lat: 38.869422,
    lng: 139.876632,
  },
};

const satoshi2019 = {
  name: "Dorian",
  surname: "Nakamoto",
  age: 44,
  hidden: true,
  country: "USA",
  wallet: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
  browser: "Chrome",
};

const satoshi2018 = {
  name: "Satoshi",
  surname: "Nakamoto",
  technology: "Bitcoin",
  country: "Japan",
  browser: "Tor",
  birth: "1975-04-05",
};

const allCollectedData = { ...satoshi2018, ...satoshi2019, ...satoshi2020 };
console.log(allCollectedData);

/* 
Task 5
You are given an array of books. 
You need to add one more book to it without 
modifying the existing array (the result should be a new array).
*/

const books = [
  {
    name: "Harry Potter",
    author: "J.K. Rowling",
  },
  {
    name: "Lord of the rings",
    author: "J.R.R. Tolkien",
  },
  {
    name: "The witcher",
    author: "Andrzej Sapkowski",
  },
];

const bookToAdd = {
  name: "Game of thrones",
  author: "George R. R. Martin",
};

const allBooks = [...books, bookToAdd];
console.log(allBooks);

/* Task 6 
Given the object employee. 
Add properties age and salary to it without modifying the original object
(a new object should be created with all the necessary properties). 
Print the new object to the console.
*/

const employee = {
  name: "Vitalii",
  surname: "Klichko",
};

let newEmployee = { ...employee, age: 22, salary: 2500 };
console.log(newEmployee);

let { name: nameOfEmp, salary: salaryOfEmp } = newEmployee;
console.log(`Salary of Employee is ${salaryOfEmp} $`);

/* 
Task 7 
Complete the code 
*/

const array = ["value", () => "showValue"];
const [value, showValue] = array;

alert(value);
alert(showValue());
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
console.log(nameOfUser);
console.log(ageOfUser);
console.log(isAdmin);

/* Task 4 */

/* Task 5 */

/* Task 6 */

/* Task 7 */

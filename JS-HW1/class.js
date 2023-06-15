/* ----> How prototypical inheritance works in JavaScript <----
We need to look at two things: what are the prototypes and what is the prototype chain?
We can think of them as blueprints.If you create an object, you can associate it with a prototype, 
and that object will take properties and methods from its prototype.
It allows us to define common functions in one place and share it among related objects.
So, what is the chain of prototypes? When we want an object to call methods from another object, we set
the prototype of this object to the prototype of the object we collected the methods inside.
Now, when the action starts JavaScript first checks if the first object has that property or method. 
If it doesn't, it looks up the prototype chain and finds 
the property or method in the object which we collected methods (which we linked the two).
In case, it reaches until the top and 
still can't find the method or property we asked, it will return null.

For example, we can have a constructor function which has some methods
that are placed inside another object.
We can call these methods every time we create a new object with this constructor.
But if we add a new "functionality" to the methods we need ton rewrite them in two places, 
in methods object and in the constructor function itself to link them. 
In this case, we can use prototype inheritance to overcome this. 
If we add these methods to the prototype object of object created by constructor function,
all objects created from that constructor function will share those methods, 
so we can avoid code duplication.

Another benefit of using prototypical inheritance could be, 
if we had different objects that are using the same methods from another object. 
We could link these methods to different objects. For example, let's imagine we have a simple chat app.
When someone is typing a message, the app should show the user "... is typing",
or when someone has deleted the message, it should show "Deleted message". 
Now, we have a lot of  people (in object logic) in the chat. In this case, 
if we were to create different methods for each "... is typing" and other functionalities for each person, 
we could not have written very effective code. Instead we could collect all the methods inside a
cons = chatMethods {...} and link it via protoype to each object (person).
*/

/* ----> Use case of super() <---- 
When one class is derived from a parent class and if they are both using a 
constructor we need to use super(). It takes the properties from the parent, in other words,
when we call it on the child class it makes sure these methods and properties are already available
before the child class gets executed.
So, we can keep the existing properties or methods, and we can add new ones in the child class.

In other words, we can use arguments that are from constructor class of the parent class
in the extended class, without needing to pass them to the constructor function.

For example, we can create a parent class, and many of child classes which extend from it.
Instead of creating constructor arguments for each of them, we can create the common ones in the
parent class, and make the child classes to inherit the properties using super() keyword.
*/

// Employee Class -->->
class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  get employeeDetails() {
    console.log(
      `${this.name} is currently employed in our company. 
       ${this.name} is ${this.age} years old and is getting paid ${this.salary} USD per month`,
    );
  }

  set employeeAge(changedAge) {
    this.age = changedAge;
  }

  set employeeName(changedName) {
    this.age = changedName;
  }

  set employeeSalary(changedSalary) {
    this.age = changedSalary;
  }
}

// Programmer Class -->->

class Programmer extends Employee {
  constructor(name, age, salary, projects, languages) {
    super(name, age, salary);
    this.projects = projects;
    this.languages = languages;
  }

  get whatProjects() {
    console.log(
      `${this.name} is currently working on the ${this.projects} Project`,
    );
  }

  set progrLang(enterLang) {
    this.languages.push(enterLang);
  }
}

const programmer1 = new Programmer("Jack Daniels", 30, 5000, "Responsive", [
  "JavaScript",
  "C#",
]);
const programmer2 = new Programmer("Johnnie Walker", 35, 6000, " Startup", [
  "Javascript",
  "Node.js",
]);

console.log(programmer1.employeeDetails);
console.log(programmer1.whatProjects);
console.log(programmer1.languages);
console.log(programmer2.employeeDetails);
console.log(programmer2.whatProjects);
console.log(programmer2.languages);

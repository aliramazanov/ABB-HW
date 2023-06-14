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
When we are connectint the two different classes, we need to use super()
It takes the properties or methods from the parent, in other words,
when we call it on the child class it makes sure these methods and properties are already available
before the child class gets executed.
So, we can keep the existing properties or methods, and we can add new ones in the child class.
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

class Programmer extends  Employee {
  constructor (name, age, salary, projects, languages)
  super(name, age, salary);

get whatProjects(){
  console.log(`${this.name} is currently working on the ${this.projects} project`);
}
  set progrLang (enterLang){
    this.languages.push(enterLang)
  }
}


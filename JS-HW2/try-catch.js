/* 

-----> Note: This method only works with code which runs (valid code) <----

When an error happens in our JavaScript code, it usually stops running
To handle this situation, and let the code to keep running despite the error
we are using try...catch.

try...catch contains two parts - the try part is where the first the the code 
runs and the catch. If there is not an error, catch part doesn't run. 
If there is an error the catch part runs and we get an error, 
which we can also define its message.

*/

const books = [
  {
      author: "Lucy Foley",
      name: "List of Invitees",
      price: 70
  },
  {
      author: "Susanna Clarke",
      name: "Jonathan Strange & Mr Norrell",
  },
  {
      name: "Design. A Book for Non-Designers.",
      price: 70
  },
  {
      author: "Alan Moore",
      name: "Neonomicon",
      price: 70
  },
  {
      author: "Terry Pratchett",
      name: "Moving Pictures",
      price: 40
  },
  {
      author: "Angus Hyland",
      name: "Cats in Art",
  }
];


const rootElement_div = document.getElementById(root);

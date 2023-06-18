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
    price: 70,
  },
  {
    author: "Susanna Clarke",
    name: "Jonathan Strange & Mr Norrell",
  },
  {
    name: "Design. A Book for Non-Designers.",
    price: 70,
  },
  {
    author: "Alan Moore",
    name: "Neonomicon",
    price: 70,
  },
  {
    author: "Terry Pratchett",
    name: "Moving Pictures",
    price: 40,
  },
  {
    author: "Angus Hyland",
    name: "Cats in Art",
  },
];

const rootElement_div = document.getElementById("root");

/* First we check if the author, name and price of the book has been insterted, 
then we can create an unordered list with list items appended which contains books details.

If it doesn't happen, we throw an error and catch it in the next catch part.
Later in the catch part we create an error message that tells us 
if the error is happening on missing author, name or the price detail of the book.*/

const checkDetails = books.forEach((book) => {
  try {
    if (book.author && book.name && book.price) {
      const ulCreated = document.createElement("ul");
      const liCreated = document.createElement("li");

      liCreated.textContent =
        'Name of the Book: "' +
        book.name +
        '", Author of the Book: "' +
        book.author +
        '", Price: "' +
        book.price +
        '"';

      ulCreated.appendChild(liCreated);
      rootElement_div.appendChild(ulCreated);
    } else {
      throw new Error("Errors: One ore more details are missing");
    }
  } catch (error) {
    let errorMessage = "Errors: {";

    if (!book.author) {
      errorMessage += "Not found required input at - author: ";
    }

    if (!book.name) {
      errorMessage += "Not found required input at - name: ";
    }

    if (!book.price) {
      errorMessage += "Not found required input at - price: ";
    }

    errorMessage = errorMessage + "}";
    console.error(errorMessage);
  }
});

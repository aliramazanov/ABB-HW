// Postman API Tests

/*
Requests:

---------------------------------- Fetch News Card:

GET http://localhost:9595/api/headlines/

---------------------------------- Fetch Single Card:

GET http://localhost:9595/api/headlines/:id

---------------------------------- Delete by ID:

DELETE http://localhost:9595/api/headlines/:id

---------------------------------- Add News Card:

POST http://localhost:9595/api/headlines/
Content-Type: application/json

{
  "title": "New Post Title",
  "content": "New post content."
}

---------------------------------- Edit News Card:

PUT http://localhost:9595/api/headlines/:id
Content-Type: application/json

{
  "title": "Updated Post Title",
  "content": "Updated post content."
}

---------------------------------- Register:


POST http://localhost:9595/auth/register
Content-Type: application/json

{
  "username": "newuser",
  "password": "newpassword"
}

---------------------------------- Login:


POST http://localhost:9595/api/login
Content-Type: application/json

{
  "username": "newuser",
  "password": "newpassword"
}


*/

//------------------------------------------

// Postman Testing Script

/*
// Register:

pm.sendRequest({
  url: 'http://localhost:9595/api/register',
  method: 'POST',
  header: {
      'Content-Type': 'application/json'
  },
  body: {
      mode: 'raw',
      raw: JSON.stringify({
          "username": "newuser",
          "password": "newpassword"
      })
  }
}, function (err, res) {
  pm.environment.set('token', res.json().token);

  // Login:


  pm.sendRequest({
      url: 'http://localhost:9595/api/login',
      method: 'POST',
      header: {
          'Content-Type': 'application/json'
      },
      body: {
          mode: 'raw',
          raw: JSON.stringify({
              "username": "newuser",
              "password": "newpassword"
          })
      }
  }, function (err, res) {
      pm.environment.set('token', res.json().token);


      // Get All:


      pm.sendRequest({
          url: 'http://localhost:9595/api/newsposts/',
          method: 'GET',
          header: {
              'Authorization': 'Bearer ' + pm.environment.get('token')
          }
      }, function (err, res) {
      });
  });
});

*/

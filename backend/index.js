const express = require('express');
const app = express();
const port = 5000;

const mongoDB = require('./db');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use('/api', require('./createUser/CreateUser'));
app.use('/api', require('./createUser/DisplayData'));

mongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// // Middleware function example
// app.use(express.json()); // Parse JSON request bodies

// mongoDB()
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Middleware function for routes starting with '/api'
// app.use('/api', (req, res, next) => {
//   // Custom middleware logic for '/api' routes
//   console.log('Middleware function for /api executed');
//   next();
// });

// // Example route handler for '/api/users'
// app.get('/api/users', (req, res) => {
//   // Route handler logic for '/api/users'
//   res.json({ message: 'API endpoint for users' });
// });

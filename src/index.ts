import express from 'express';

// Create an Express application
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

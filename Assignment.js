// I am submitting Tsk code only .
const axios = require('axios');

// Task 1: Get the book list available in the shop.
function getBookList() {
  return axios.get('https://example.com/api/books');
}

// Task 2: Get the books based on ISBN.
function getBooksByISBN(isbn) {
  return axios.get(`https://example.com/api/books?isbn=${isbn}`);
}

// Task 6: Register New user.
function registerNewUser(userData) {
  return axios.post('https://example.com/api/register', userData);
}

// Task 7: Login as a Registered user.
function loginUser(credentials) {
  return axios.post('https://example.com/api/login', credentials);
}

// Task 11: Search by ISBN using Promises.
function searchByISBN(isbn) {
  return new Promise((resolve, reject) => {
    axios.get(`https://example.com/api/books?isbn=${isbn}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Example usage of the functions:
getBookList()
  .then((response) => {
    console.log('Book List:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

registerNewUser({ username: 'user123', password: 'pass123' })
  .then((response) => {
    console.log('User registered:', response.data);
  })
  .catch((error) => {
    console.error('Registration error:', error);
  });

// You can similarly use other functions for different tasks.

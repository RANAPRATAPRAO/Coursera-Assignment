// task11.js
const axios = require('axios');

function searchByISBN(isbn) {
  // Replace this URL with the actual API endpoint for searching by ISBN.
  return new Promise((resolve, reject) => {
    axios.get(`https://example.com/api/books?isbn=${isbn}`)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data); // Resolve with the data on success.
        } else {
          reject(`Failed to search by ISBN. Status code: ${response.status}`);
        }
      })
      .catch((error) => {
        reject(`Error in Task 11: ${error.message}`);
      });
  });
}

module.exports = searchByISBN;

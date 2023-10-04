// task10.js
const axios = require('axios');

function getAllBooksAsyncCallback(callback) {
  // Replace this URL with the actual API endpoint for getting all books.
  axios.get('https://example.com/api/books')
    .then((response) => {
      if (response.status === 200) {
        callback(null, response.data); // Pass data to the callback on success.
      } else {
        callback(`Failed to fetch all books. Status code: ${response.status}`);
      }
    })
    .catch((error) => {
      callback(`Error in Task 10: ${error.message}`);
    });
}

module.exports = getAllBooksAsyncCallback;

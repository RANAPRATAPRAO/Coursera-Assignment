// task2.js
const axios = require('axios');

async function getBooksByISBN(isbn) {
  try {
    // Replace this URL with the actual API endpoint for retrieving books by ISBN.
    const response = await axios.get(`https://example.com/api/books?isbn=${isbn}`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch books by ISBN. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error in Task 2: ${error.message}`);
  }
}

module.exports = getBooksByISBN;

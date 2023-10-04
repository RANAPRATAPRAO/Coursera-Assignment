// task3.js
const axios = require('axios');

async function getBooksByAuthor(authorName) {
  try {
    // Replace this URL with the actual API endpoint for retrieving books by author.
    const response = await axios.get(`https://example.com/api/books?author=${authorName}`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch books by author. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error in Task 3: ${error.message}`);
  }
}

module.exports = getBooksByAuthor;

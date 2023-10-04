// task12.js
const axios = require('axios');

async function searchByAuthor(authorName) {
  try {
    // Replace this URL with the actual API endpoint for searching by author.
    const response = await axios.get(`https://example.com/api/books?author=${authorName}`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to search by author. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error in Task 12: ${error.message}`);
  }
}

module.exports = searchByAuthor;

// task1.js
const axios = require('axios');

async function getBookList() {
  try {
    // Replace this URL with the actual API endpoint for retrieving book list.
    const response = await axios.get('https://example.com/api/books');

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch book list. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error in Task 1: ${error.message}`);
  }
}

module.exports = getBookList;

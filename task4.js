// task4.js
const axios = require('axios');

async function getBooksByTitle(title) {
  try {
    // Replace this URL with the actual API endpoint for retrieving books by title.
    const response = await axios.get(`https://example.com/api/books?title=${title}`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch books by title. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error in Task 4: ${error.message}`);
  }
}

module.exports = getBooksByTitle;

// task13.js
const axios = require('axios');

async function searchByTitle(title) {
  try {
    // Replace this URL with the actual API endpoint for searching by title.
    const response = await axios.get(`https://example.com/api/books?title=${title}`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to search by title. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error in Task 13: ${error.message}`);
  }
}

module.exports = searchByTitle;

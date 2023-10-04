// task5.js
const axios = require('axios');

async function getBookReview(bookId) {
  try {
    // Replace this URL with the actual API endpoint for retrieving book reviews.
    const response = await axios.get(`https://example.com/api/book-reviews/${bookId}`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch book review. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error in Task 5: ${error.message}`);
  }
}

module.exports = getBookReview;

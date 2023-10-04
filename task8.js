// task8.js
const axios = require('axios');

async function addOrModifyReview(bookId, reviewData) {
  try {
    // Replace this URL with the actual API endpoint for adding or modifying book reviews.
    const response = await axios.post(`https://example.com/api/reviews/${bookId}`, reviewData);

    if (response.status === 200) {
      return response.data; // Assuming the API returns a confirmation message or updated review data.
    } else {
      throw new Error(`Failed to add/modify review. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error in Task 8: ${error.message}`);
  }
}

module.exports = addOrModifyReview;

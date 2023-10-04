// task9.js
const axios = require('axios');

async function deleteReview(reviewId) {
  try {
    // Replace this URL with the actual API endpoint for deleting a book review.
    const response = await axios.delete(`https://example.com/api/reviews/${reviewId}`);

    if (response.status === 204) {
      return 'Review deleted successfully'; // Assuming the API returns a success message.
    } else {
      throw new Error(`Failed to delete review. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error in Task 9: ${error.message}`);
  }
}

module.exports = deleteReview;

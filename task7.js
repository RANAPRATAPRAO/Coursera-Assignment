// task7.js
const axios = require('axios');

async function loginUser(credentials) {
  try {
    // Replace this URL with the actual API endpoint for user login.
    const response = await axios.post('https://example.com/api/login', credentials);

    if (response.status === 200) {
      return response.data; // Assuming the API returns user information upon successful login.
    } else {
      throw new Error(`Failed to log in. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error in Task 7: ${error.message}`);
  }
}

module.exports = loginUser;

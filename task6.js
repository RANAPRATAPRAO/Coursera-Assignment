// task6.js
const axios = require('axios');

async function registerNewUser(userData) {
  try {
    // Replace this URL with the actual API endpoint for user registration.
    const response = await axios.post('https://example.com/api/register', userData);

    if (response.status === 201) {
      return response.data; // Assuming the API returns user information upon successful registration.
    } else {
      throw new Error(`Failed to register a new user. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error in Task 6: ${error.message}`);
  }
}

module.exports = registerNewUser;

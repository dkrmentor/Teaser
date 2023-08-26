// api.js

const BASE_URL = "https://jsonplaceholder.typicode.com"; // Replace with your API URL

export const signup = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Signup failed");
    }
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

export const authenticate = async (email, password) => {
  try {
    // Simulating authentication
    const response = await fetch(`${BASE_URL}/users?email=${email}`);
    if (response.ok) {
      const users = await response.json();
      const user = users.find((u) => u.email === email);
      if (user && user.username === password) {
        return user;
      } else {
        throw new Error("Authentication failed");
      }
    } else {
      throw new Error("Authentication failed");
    }
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};

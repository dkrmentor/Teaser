import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/authProvider/authProvider.auth.js"; // Import the useAuth hook
import "./login.auth.css";

import { authenticate } from "../../utils/apiProvider/apiProvider.auth.js"; // Import the authenticate function

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authenticate(inputs.email, inputs.password);
      if (user) {
        navigate("/dashboard");
      }
    } catch (error) {
      // Handle login error
    }
  };

  const handleReset = () => {
    setIsSignUp(!isSignUp);
    setInputs({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* ... your form content ... */}
        <button type="submit">
          {isSignUp ? "Sign Up" : "Login"}
        </button>
        <p>
          {isSignUp ? "Already" : "Don’t"} have an Account?{" "}
          <Link to={isSignUp ? "/login" : "/signup"}>
            {isSignUp ? "Login" : "Sign up"} here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

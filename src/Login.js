
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dummyUsers from "./dummyData"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    
    const user = dummyUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      navigate("/home/book"); 
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-gray-900 flex items-center justify-center">
      <div className="w-full max-w-xl bg-transparent p-16 rounded-lg shadow-lg"> 
        <div className="flex justify-center mb-12"> 
          <div className="w-32 h-32 bg-gray-800 text-white flex items-center justify-center rounded-full"> 
            <span className="text-6xl font-bold">D</span> 
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="mb-8"> 
            <label
              htmlFor="username"
              className="block text-gray-300 font-medium mb-6" 
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-6 py-4 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" 
              placeholder="Username"
            />
          </div>
          <div className="mb-12"> 
            <label
              htmlFor="password"
              className="block text-gray-300 font-medium mb-6" 
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" 
              placeholder="Password"
            />
          </div>
          {error && (
            <p className="text-red-500 text-lg mb-8">{error}</p> 
          )}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-bold py-4 px-6 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2" 
          >
            Log In
          </button>
        </form>
       
      </div>
    </div>
  );
};

export default Login;

//end here 

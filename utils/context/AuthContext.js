"use client";
// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import CryptoJS from "crypto-js"; // Import CryptoJS for encryption and decryption
import { getBaseUrl } from "../baseUrl";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);


  const baseUrl = getBaseUrl();
  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY; // Get secret key from .env file

  const loadToken = () => {
    const encryptedToken = localStorage.getItem("authToken");
    if (encryptedToken) {
      const decryptedToken = CryptoJS.AES.decrypt(encryptedToken, secretKey).toString(CryptoJS.enc.Utf8); // Decrypt the token
      setToken(decryptedToken);
    }
  };

  useEffect(() => {
    loadToken(); // Load token on mount
  }, []);
  const login = async (email, password) => {
    try {
        const response = await axios.post(`${baseUrl}/api/login`, {
            email,
            password,
        });

        if (response.data.token) {
            // Encrypt the token using AES and the secret key
            const encryptedToken = CryptoJS.AES.encrypt(response.data.token, secretKey).toString();
            
            // Store the encrypted token in localStorage
            localStorage.setItem("authToken", encryptedToken);
            console.log("Token in localStorage:", localStorage.getItem("authToken"));

            // Also, encrypt and store user data
            const user = response.data.user;
            const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(user), secretKey).toString();
            localStorage.setItem("user", encryptedUser); // Store the encrypted user data
            
            // Set the token and user in the state
            setToken(encryptedToken);
            setUser(user); // Optionally set the decrypted user in the state
            
            // Return the response so handleSignIn can access it
            return response;
        } else {
            console.error("Token not found in response");
            return null;
        }
    } catch (error) {
        console.error("Login failed:", error);
        throw error; // Throw the error so it can be caught in handleSignIn
    }
};



  const logout = () => {
    localStorage.removeItem("authToken"); // Remove token from local storage
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

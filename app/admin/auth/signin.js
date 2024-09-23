'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useAuth } from '@/utils/context/AuthContext'; // Import the useAuth hook to access the login function
import { useRouter } from 'next/navigation'; 
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

export default function SignIn() {
    const { login } = useAuth(); // Get the login function from the AuthContext
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const router = useRouter(); // Initialize the router
    
    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
    
        try {
            // Call the login function from the AuthContext and pass the email and password
            const response = await login(email, password);
            
            console.log("response-->",response)
            if (response.status === 200) {
                // Show success toast if login is successful
                toast.success('Login successful!', {
                    position: "top-right",
                    autoClose: 3000, // Auto close after 3 seconds
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                router.push(`/admin/dashboard`); // Replace with the path you want to redirect to
            } else {
                // Show error toast if response status is not 200
                toast.error('Login failed! Please check your credentials.', {
                    position: "top-right",
                    autoClose: 5000, // Auto close after 5 seconds
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            // Handle HTTP errors (status codes)
            if (error.response) {
                if (error.response.status === 401) {
                    // Unauthorized (invalid credentials)
                    toast.error('Invalid credentials. Please try again.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else if (error.response.status === 500) {
                    // Internal server error
                    toast.error('Server error. Please try again later.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    // General error message
                    toast.error('Login failed! Please try again.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            } else {
                // Network error or other unexpected errors
                toast.error('Network error. Please try again later.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    };
    

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 md:px-20 bg-white">
                {/* Container for logo, heading, and paragraph */}
                <div className="w-full max-w-md text-left">
                    {/* Logo */}
                    <div className="mb-8">
                        <Image
                            src="/images/logo.png" // Update this path to your logo
                            alt="Siscom Logo"
                            width={150}
                            height={50}
                        />
                    </div>

                    {/* Welcome Message */}
                    <h1 className="text-3xl font-bold text-[#EB1260] mb-2">Welcome Back</h1>
                    <p className="text-gray-500 mb-8">Enter your email and password to sign in</p>
                </div>

                {/* Form */}
                <form className="w-full max-w-md" onSubmit={handleSignIn}>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#EB1260]"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#EB1260]"
                            required
                        />
                    </div>

                    {/* Remember Me - Slide Toggle */}
                    <div className="flex items-center mb-6">
                        <label htmlFor="remember" className="flex items-center cursor-pointer">
                            {/* Slide Toggle */}
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="sr-only"
                                    checked={rememberMe}
                                    onChange={toggleRememberMe}
                                />
                                <div className={`block w-14 h-8 rounded-full ${rememberMe ? 'bg-[#EB1260]' : 'bg-gray-300'}`}></div>
                                <div
                                    className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${rememberMe ? 'transform translate-x-6' : ''}`}
                                ></div>
                            </div>
                            <span className="ml-3 text-gray-700">Remember me</span>
                        </label>
                    </div>

                    {/* Sign In Button */}
                    <button type="submit" className="w-full bg-[#EB1260] text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300">
                        SIGN IN
                    </button>
                </form>

                <div className="mt-6 text-center w-full"></div>
            </div>

            {/* Right Side - Background */}
            <div className="hidden md:flex w-1/2 h-[80vh] bg-customPink relative rounded-md overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/square.png" // Update this path to your background image
                        alt="Background Pattern"
                        fill
                        className="object-cover"
                        quality={75}
                    />
                </div>
            </div>

            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
}

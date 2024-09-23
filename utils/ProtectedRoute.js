// src/hoc/ProtectedRoute.js
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13 (app directory)
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth(); // Access token from the AuthContext
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      // If no token, redirect to login
      router.push("/admin/auth");
    }
  }, [token, router]);

  if (!token) {
    return null; // Optionally show a loading state while redirecting
  }

  return children; // Render the protected page content if authenticated
};

export default ProtectedRoute;

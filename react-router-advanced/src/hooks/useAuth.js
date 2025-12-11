import { useState } from "react";

export default function useAuth() {
  // Simulate authentication status
  const [isAuthenticated] = useState(false); // Change to true to simulate login
  return { isAuthenticated };
}

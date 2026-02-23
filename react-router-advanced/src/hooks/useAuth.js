import { useState } from "react";

// Simple auth hook
export default function useAuth() {
  // simulate auth status
  const [isAuthenticated] = useState(false); // change to true to simulate login
  return { isAuthenticated };
}

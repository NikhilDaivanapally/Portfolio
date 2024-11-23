import React, { createContext, useState, ReactNode } from "react";

// Define the context
export const DataContext = createContext<{
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

// Define the context provider component
interface UserContextProps {
  children: ReactNode; // Specify the type of children prop
}

const UserContext: React.FC<UserContextProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    // Check for theme in localStorage, default to 'light' if not found
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark"; // Return true for dark theme, false for light theme
  });

  return (
    <DataContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children} {/* Render the children passed to the provider */}
    </DataContext.Provider>
  );
};

export default UserContext;

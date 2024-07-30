import React, { useState } from "react";
import AppRouter from "./Router"; // Adjusted the import path if necessary
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { AuthenticationForm } from "./components/AuthenticationForm";
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {isAuthenticated ? (
        <AppRouter />
      ) : (
        <>
          <div className="flex justify-center items-center min-h-screen">
            <AuthenticationForm
              onAuthSuccess={() => {
                setIsAuthenticated(true);
                <AppRouter />
                navigate("/");
              }}
            />
          </div>
        </>
      )}
      <Toaster />
    </ThemeProvider>
  );
};

export default App;

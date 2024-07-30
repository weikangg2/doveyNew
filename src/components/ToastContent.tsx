// src/components/ToastContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Toast, ToastProvider, ToastViewport} from '@/components/ui/toast';

interface ToastContextType {
  addToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
};

export const ToastContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<string[]>([]);

  const addToast = (message: string) => {
    setToasts((prev) => [...prev, message]);
    setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 3000); // Toast duration: 3 seconds
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastProvider>
        <ToastViewport className="fixed top-4 left-1/2 transform -translate-x-1/2 flex flex-col space-y-4" />
        {toasts.map((toast, index) => (
          <Toast key={index} className="bg-green-500 text-white">
            {toast}
          </Toast>
        ))}
      </ToastProvider>
    </ToastContext.Provider>
  );
};

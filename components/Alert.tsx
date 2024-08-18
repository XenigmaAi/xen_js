// components/Alert.tsx
import React, { useEffect, useState } from 'react';

interface AlertProps {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  onClose: () => void;
  timeout?: number; // Timeout in milliseconds
}

const alertStyles = {
  success: 'bg-green-100 border border-green-500 text-green-700',
  error: 'bg-red-100 border border-red-500 text-red-700',
  info: 'bg-blue-100 border border-blue-500 text-blue-700',
  warning: 'bg-yellow-100 border border-yellow-500 text-yellow-700',
};

const Alert: React.FC<AlertProps> = ({ type, message, onClose, timeout }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (timeout) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [timeout, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg shadow-md ${alertStyles[type]} transition-opacity duration-500 opacity-100`}
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <span>{message}</span>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose();
        }}
        className="ml-4 text-lg font-semibold text-opacity-75 hover:text-opacity-100 focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
};

export default Alert;

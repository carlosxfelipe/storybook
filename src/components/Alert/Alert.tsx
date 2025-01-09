import React from "react";
import "./Alert.css";

type AlertProps = {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  onClose?: () => void;
};

const Alert: React.FC<AlertProps> = ({ message, type = "info", onClose }) => {
  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      {onClose && (
        <button className="alert-close" onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;

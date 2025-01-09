import React, { useEffect, useState } from "react";
import "./Alert.css";

type AlertProps = {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number; // Tempo em segundos antes de fechar automaticamente
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

const Alert: React.FC<AlertProps> = ({
  message,
  type = "info",
  duration,
  position = "top-right",
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setVisible(false); // Controla a visibilidade internamente
      }, duration * 1000); // Converte segundos para milissegundos
      return () => clearTimeout(timer); // Limpa o timer ao desmontar
    }
  }, [duration]);

  if (!visible) return null; // Não renderiza o componente se não estiver visível

  return (
    <div className={`alert alert-${type} alert-${position}`}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;

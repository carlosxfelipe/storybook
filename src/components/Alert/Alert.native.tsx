import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Animated,
  Dimensions,
  Platform,
  StyleProp,
  ViewStyle,
} from "react-native";

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
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    if (duration) {
      const timer = setTimeout(() => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => setVisible(false));
      }, duration * 1000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  if (!visible) return null;

  const getPositionStyle = (): StyleProp<ViewStyle> => {
    const { width } = Dimensions.get("window");
    const baseStyle: StyleProp<ViewStyle> = {
      position: "absolute",
      zIndex: 1000,
    };

    if (position.includes("top")) baseStyle.top = 16;
    if (position.includes("bottom")) baseStyle.bottom = 16;
    if (position.includes("left")) baseStyle.left = 16;
    if (position.includes("right")) baseStyle.right = 16;
    if (Platform.OS === "ios") baseStyle.width = width - 32; // Ajusta largura no iOS

    return baseStyle;
  };

  const backgroundColor =
    type === "success"
      ? "#4caf50"
      : type === "error"
      ? "#f44336"
      : type === "info"
      ? "#2196f3"
      : "#ff9800";

  return (
    <Animated.View
      style={[
        styles.container,
        getPositionStyle(),
        { backgroundColor, opacity },
      ]}
    >
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Sombras para Android
  },
  message: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Alert;

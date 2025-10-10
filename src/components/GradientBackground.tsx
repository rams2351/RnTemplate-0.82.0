import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../assets/colors';

interface BgGradientProps {
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  borderRadius?: number;
}

const GradientBackground: React.FC<BgGradientProps> = ({
  colors = [Colors.textBlue, Colors.textSecondary],
  start = { x: 1, y: 1 },
  end = { x: 0, y: 0 },
  style,
  children,
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      style={[styles.gradient, style]}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;

const styles = StyleSheet.create({
  gradient: {
    // overflow: 'hidden',
  },
});

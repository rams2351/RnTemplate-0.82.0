import { useTheme } from '@theme/ThemeProvider';
import React, { useMemo } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface BgGradientProps {
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  borderRadius?: number;
}

const GradientBackground: React.FC<BgGradientProps> = ({
  colors,
  start = { x: 1, y: 1 },
  end = { x: 0, y: 0 },
  style,
  children,
}) => {
  const { colors: themeColors } = useTheme();

  const gradientColors = useMemo(() => {
    return colors ? colors : [themeColors.textBlue, themeColors.textSecondary];
  }, [colors, themeColors]);
  return (
    <LinearGradient
      colors={gradientColors}
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

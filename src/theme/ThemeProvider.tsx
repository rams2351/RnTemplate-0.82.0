import React, { createContext, ReactNode, useContext, useState } from 'react';

type ThemeType = 'light' | 'dark';

export interface ThemeData {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  colors: typeof Colors.light;
}

const Colors = {
  light: {
    primary: '#8354FF',
    secondary: '#DD3562',
    textPrimary: '#33196B',
    textSecondary: '#F93572',
    textBlue: '#4635E2',
    colorOffWhite: 'rgb(250, 249, 246)',
    background: '#FFFFFF',
    card: '#F8F8F8',
    border: '#E2E2E2',
  },
  dark: {
    primary: '#8354FF',
    secondary: '#DD3562',
    textPrimary: '#FFFFFF',
    textSecondary: '#F93572',
    textBlue: '#A1A4FF',
    colorOffWhite: '#1C1C1C',
    background: '#121212',
    card: '#1E1E1E',
    border: '#2C2C2C',
  },
};

const initialTheme: ThemeData = {
  theme: 'light',
  colors: Colors.light,
  setTheme: () => {},
};

const ThemeContext = createContext<ThemeData>(initialTheme);

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('light');

  const value: ThemeData = {
    theme,
    setTheme,
    colors: theme === 'light' ? Colors.light : Colors.dark,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

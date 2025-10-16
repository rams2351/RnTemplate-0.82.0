import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

type ThemeType = 'light' | 'dark';

export interface ThemeData {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  colors: typeof Colors.light;
  toggleTheme: () => void;
}

const Colors = {
  light: {
    // Core
    primary: '#8354FF',
    secondary: '#DD3562',

    // Texts
    textPrimary: '#33196B',
    textSecondary: '#6B6B6B',
    textBlue: '#4635E2',
    text: '#2C2C2C',
    disabledText: '#9E9E9E',
    placeholder: '#A8A8A8',

    // Backgrounds
    background: '#FFFFFF',
    card: '#F8F8F8',
    colorOffWhite: 'rgb(250, 249, 246)',
    disabledBg: '#E6E6E6',

    // Borders & Dividers
    border: '#E2E2E2',
    divider: '#E0E0E0',

    // Status Colors
    error: '#FF3B30',
    success: '#34C759',
    warning: '#FF9500',
    info: '#007AFF',

    // Overlays
    overlay: 'rgba(0,0,0,0.3)',
  },

  dark: {
    // Core
    primary: '#8354FF',
    secondary: '#DD3562',

    // Texts
    textPrimary: '#FFFFFF',
    textSecondary: '#BEBEBE',
    textBlue: '#A1A4FF',
    text: '#E2E2E2',
    disabledText: '#555555',
    placeholder: '#777777',

    // Backgrounds
    background: '#121212',
    card: '#1E1E1E',
    colorOffWhite: '#1C1C1C',
    disabledBg: '#2A2A2A',

    // Borders & Dividers
    border: '#2C2C2C',
    divider: '#333333',

    // Status Colors
    error: '#FF453A',
    success: '#30D158',
    warning: '#FFD60A',
    info: '#0A84FF',

    // Overlays
    overlay: 'rgba(255,255,255,0.15)',
  },
};

const initialTheme: ThemeData = {
  theme: 'light',
  colors: Colors.light,
  setTheme: () => {},
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeData>(initialTheme);

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const value: ThemeData = {
    theme,
    setTheme,
    colors: theme === 'light' ? Colors.light : Colors.dark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

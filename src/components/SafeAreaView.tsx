import { useTheme } from '@theme/ThemeProvider';
import React, { ReactNode, useMemo } from 'react';
import { StatusBar, StyleSheet, ViewStyle } from 'react-native';
import { Edges, SafeAreaView as SAV } from 'react-native-safe-area-context';

interface IProps {
  style?: ViewStyle;
  children: ReactNode;
  edges?: Edges | undefined;
}

const SafeAreaView: React.FC<IProps> = ({ style, children, edges }) => {
  const { colors, theme } = useTheme();
  const defaultStyle = useMemo(() => {
    return {
      flex: 1,
      backgroundColor: style?.backgroundColor || colors.background,
    };
  }, [style, colors]);

  return (
    <SAV edges={edges} style={defaultStyle}>
      <StatusBar
        barStyle={theme == 'dark' ? 'light-content' : 'dark-content'}
      />
      {children}
    </SAV>
  );
};

export default SafeAreaView;

const styles = StyleSheet.create({});

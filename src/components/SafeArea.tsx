import React, { ReactNode } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Edges, SafeAreaView } from 'react-native-safe-area-context';

interface IProps {
  style?: ViewStyle;
  children: ReactNode;
  edges?: Edges | undefined;
}

const SafeArea: React.FC<IProps> = ({ style, children, edges }) => {
  return (
    <SafeAreaView edges={edges} style={[style]}>
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;

const styles = StyleSheet.create({});

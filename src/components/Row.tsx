import { scaler } from '@utils/helpers';
import React, { useMemo } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

interface IRowProps extends ViewProps {
  onPress?: () => void;
  activeOpacity?: number;
  disabled?: boolean;
}

const Row: React.FC<IRowProps> = props => {
  const { onPress, activeOpacity, disabled, style, children, ...rest } = props;

  const styles = useMemo(() => {
    const base: ViewStyle = {
      flexDirection: 'row',
      gap: scaler(5),
    };
    return {
      container: {
        ...base,
        ...style,
      },
    };
  }, [style]);

  return (
    <React.Fragment>
      {onPress ? (
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          children={children}
          style={styles.container}
        />
      ) : (
        <View style={styles.container} {...rest} children={children} />
      )}
    </React.Fragment>
  );
};

export default Row;

const styles = StyleSheet.create({});

import Fonts from '@assets/fonts';
import Text from '@components/Text';
import { useTheme } from '@theme/ThemeProvider';
import { scaler } from '@utils/helpers';
import React, { ReactNode, useMemo, useState } from 'react';
import {
  TextInput as RNTextInput,
  StyleProp,
  StyleSheet,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface ITextInputProps extends TextInputProps {
  label?: string;
  error?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  onEndIconPress?: () => void;
}

const TextInput: React.FC<ITextInputProps> = ({
  label,
  error,
  startIcon,
  endIcon,
  containerStyle,
  onEndIconPress,
  style,
  editable = true,
  ...rest
}) => {
  const { colors } = useTheme();
  const [focused, setFocused] = useState(false);

  const textInputStyle = useMemo(() => {
    const base: TextStyle = {
      height: scaler(44),
      borderWidth: scaler(1),
      borderRadius: scaler(8),
      borderColor: error
        ? colors.error
        : focused
        ? colors.primary
        : colors.border,
      backgroundColor: editable ? colors.background : colors.disabledBg,
      color: colors.text,
      fontFamily: Fonts.regular,
      fontSize: scaler(14),
      paddingVertical: scaler(8),
      paddingLeft: startIcon ? scaler(32) : scaler(12),
      paddingRight: endIcon ? scaler(32) : scaler(12),
    };
    return StyleSheet.flatten([base, style]);
  }, [style, focused, colors, startIcon, endIcon, error, editable]);

  const labelStyle = useMemo(
    () => ({
      color: colors.textSecondary,
      fontSize: scaler(11),
      marginBottom: scaler(5),
      paddingHorizontal: scaler(5),
    }),
    [colors],
  );

  const errorStyle = useMemo(
    () => ({
      color: colors.error,
      fontFamily: Fonts.regular,
      fontSize: scaler(12),
      marginTop: scaler(4),
    }),
    [colors],
  );

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label ? (
        <Text style={[labelStyle, { fontWeight: '500' }]}>{label}</Text>
      ) : null}

      <View style={styles.inputWrapper}>
        {startIcon && <View style={styles.startIcon}>{startIcon}</View>}

        <RNTextInput
          {...rest}
          editable={editable}
          placeholderTextColor={colors.placeholder}
          style={textInputStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        {endIcon && (
          <TouchableOpacity
            activeOpacity={onEndIconPress ? 0.6 : 1}
            style={styles.endIcon}
            onPress={onEndIconPress}
          >
            {endIcon}
          </TouchableOpacity>
        )}
      </View>

      {error ? <Text style={errorStyle}>{error}</Text> : null}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginVertical: scaler(6),
  },
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  startIcon: {
    position: 'absolute',
    left: scaler(10),
    zIndex: 10,
  },
  endIcon: {
    position: 'absolute',
    right: scaler(10),
    zIndex: 10,
  },
});

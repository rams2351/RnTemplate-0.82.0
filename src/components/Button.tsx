import Text from '@components/Text';
import { useTheme } from '@theme/ThemeProvider';
import { scaler } from '@utils/helpers';
import React, { ReactNode, useMemo } from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type ButtonVariantType = 'outline' | 'link' | 'contained';

interface IButtonProps {
  variant?: ButtonVariantType;
  title?: string;
  children?: ReactNode;
  activeOpacity?: number;
  onPress?: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  variant = 'contained',
  activeOpacity = 0.8,
  children,
  onPress,
  title,
  style,
  titleStyle,
  disabled = false,
}) => {
  const { colors } = useTheme();

  const computedStyles = useMemo(() => {
    const baseContainer: ViewStyle = {
      paddingHorizontal: scaler(15),
      paddingVertical: scaler(8),
      borderRadius: scaler(5),
      marginVertical: scaler(4),
      alignSelf: 'flex-start',
      alignItems: 'center',
    };

    const baseTitle: TextStyle = {
      fontWeight: '500',
      fontSize: scaler(13),
    };

    const variants: Record<ButtonVariantType, ViewStyle> = {
      contained: {
        backgroundColor: colors.primary,
      },
      outline: {
        borderWidth: 1,
        borderColor: colors.primary,
        backgroundColor: 'transparent',
      },
      link: {
        backgroundColor: 'transparent',
        paddingHorizontal: 0,
        paddingVertical: 0,
      },
    };

    const titleVariants: Record<ButtonVariantType, TextStyle> = {
      contained: { color: colors.textPrimary },
      outline: { color: colors.textPrimary },
      link: { color: colors.textPrimary, textDecorationLine: 'underline' },
    };

    return StyleSheet.create({
      container: { ...baseContainer, ...variants[variant], ...style },
      title: { ...baseTitle, ...titleVariants[variant], ...titleStyle },
    });
  }, [colors, variant, style, titleStyle]);

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={computedStyles.container}
      onPress={onPress}
      disabled={disabled}
    >
      {children ? children : <Text style={computedStyles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default Button;

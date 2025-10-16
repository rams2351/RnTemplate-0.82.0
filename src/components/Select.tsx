import Fonts from '@assets/fonts';
import Text from '@components/Text';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import { useTheme } from '@theme/ThemeProvider';
import { scaler } from '@utils/helpers';
import React, { ReactNode, useMemo, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

interface SelectOption {
  label: string;
  value: string | number;
}

interface ISelectProps {
  label?: string;
  error?: string;
  placeholder?: string;
  data: SelectOption[];
  value: any;
  onChange: (value: any) => void;
  multiple?: boolean;
  startIcon?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  dropdownStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  searchable?: boolean;
}

const Select: React.FC<ISelectProps> = ({
  label,
  error,
  placeholder = 'Select item',
  data,
  value,
  onChange,
  multiple = false,
  startIcon,
  containerStyle,
  dropdownStyle,
  disabled = false,
  searchable = false,
}) => {
  const { colors, theme } = useTheme();
  const [focused, setFocused] = useState(false);

  const styles = useMemo(() => {
    const wrapper: ViewStyle = {
      width: '100%',
      marginVertical: scaler(6),
    };

    const dropdown: ViewStyle = {
      height: scaler(44),
      borderWidth: scaler(1),
      borderRadius: scaler(8),
      borderColor: error
        ? colors.error
        : focused
        ? colors.primary
        : colors.border,
      backgroundColor: disabled ? colors.disabledBg : colors.background,
      paddingHorizontal: scaler(10),
      justifyContent: 'center',
    };

    const labelStyle: TextStyle = {
      color: colors.textSecondary,
      fontSize: scaler(11),
      marginBottom: scaler(5),
      paddingHorizontal: scaler(5),
      fontWeight: '500',
    };

    const placeholderStyle: TextStyle = {
      color: colors.placeholder,
      fontFamily: Fonts.regular,
      fontSize: scaler(14),
    };

    const selectedTextStyle: TextStyle = {
      color: colors.text,
      fontFamily: Fonts.regular,
      fontSize: scaler(12),
    };

    const errorStyle: TextStyle = {
      color: colors.error,
      fontFamily: Fonts.regular,
      fontSize: scaler(12),
      marginTop: scaler(4),
    };

    const iconContainer: ViewStyle = {
      paddingHorizontal: scaler(8),
    };

    const container: ViewStyle = {
      backgroundColor: colors.card,
      borderRadius: scaler(8),
      borderWidth: scaler(1),
      borderColor: colors.border,
      shadowColor: theme === 'dark' ? '#000' : '#999',
      shadowOpacity: scaler(0.1),
      shadowRadius: scaler(5),
      elevation: scaler(3),
      overflow: 'hidden',
    };

    return StyleSheet.create({
      wrapper,
      dropdown,
      labelStyle,
      placeholderStyle,
      selectedTextStyle,
      errorStyle,
      container,
      iconContainer,
    });
  }, [colors, focused, error, startIcon, disabled]);

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label ? <Text style={styles.labelStyle}>{label}</Text> : null}

      <Dropdown
        style={[styles.dropdown, dropdownStyle]}
        placeholderStyle={styles.placeholderStyle}
        itemTextStyle={{ color: colors.text }}
        activeColor={colors.divider}
        fontFamily={Fonts.regular}
        containerStyle={styles.container}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        search={searchable}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Search..."
        value={value}
        //   @ts-ignore
        renderLeftIcon={startIcon ? () => startIcon : undefined}
        disable={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={item => {
          onChange(item.value);
          setFocused(false);
        }}
        renderRightIcon={() => (
          <FontAwesome
            name={focused ? 'angle-up' : 'angle-down'}
            size={scaler(16)}
            color={focused ? colors.primary : colors.textSecondary}
          />
        )}
      />

      {error ? <Text style={styles.errorStyle}>{error}</Text> : null}
    </View>
  );
};

export default Select;

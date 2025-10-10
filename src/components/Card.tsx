import React, { useMemo } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
//@ts-ignore
import CardView from 'react-native-cardview';
import colors from '../assets/colors';
import { scaler } from '../utils/helpers';

interface ICardProps {
  cardElevation?: number;
  cardMaxElevation?: number;
  cornerRadius?: number;
  useCompatPadding?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: (e: any) => void;
  children?: any;
  activeOpacity?: number;
  touchableContainerStyle?: StyleProp<ViewStyle>;
}

export const Card: React.FC<ICardProps> = ({
  style,
  children,
  onPress,
  activeOpacity = 0.9,
  touchableContainerStyle = { width: '100%' },
  ...props
}) => {
  const styles = useMemo(() => {
    const propStyle = StyleSheet.flatten(style || {});

    return StyleSheet.create({
      cardStyle: {
        backgroundColor: colors.colorOffWhite,
        width: '100%',
        ...propStyle,
        padding: onPress ? 0 : propStyle?.padding ?? scaler(15),
      },
      touchableStyle: {
        flex: 1,
        padding: propStyle.padding ?? scaler(15),
        ...StyleSheet.flatten(touchableContainerStyle),
      },
    });
  }, [!!onPress, style]);

  return (
    <MyCardView style={styles.cardStyle} {...props}>
      {onPress ? (
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={onPress}
          style={styles.touchableStyle}
        >
          {children}
        </TouchableOpacity>
      ) : (
        children
      )}
    </MyCardView>
  );
};

const MyCardView: React.FC<ICardProps> = props => {
  return (
    <CardView
      useCompatPadding={props?.useCompatPadding}
      style={props?.style}
      cardElevation={props.cardElevation ?? 3}
      cardMaxElevation={props?.cardMaxElevation ?? 3}
      cornerRadius={props?.cornerRadius ?? 20}
    >
      {props.children}
    </CardView>
  );
};

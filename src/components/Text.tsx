import React, { useMemo } from 'react';
import {
  Platform,
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  StyleSheet,
  TextStyle,
} from 'react-native';
import Colors from '../assets/colors';
import Fonts from '../assets/fonts';

type FontType =
  | 'bold'
  | 'extraLight'
  | 'light'
  | 'medium'
  | 'regular'
  | 'extraBold'
  | 'semiBold';
type IFontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

interface MyTextStyle extends TextStyle {
  type?: FontType;
}

export type AnimatedTextProps = Partial<
  Omit<RNTextProps, 'children'> & {
    text?: string;
  }
>;

interface TextProps extends RNTextProps {
  style?: StyleProp<MyTextStyle> | undefined;
  animated?: boolean;
  animatedProps?: Partial<AnimatedTextProps> | undefined;
}

const Text: React.FC<TextProps> = props => {
  let { style, animatedProps, ...rest } = props;

  const styles = useMemo(() => {
    const styles = { ...StyleSheet.flatten(style ?? {}) };
    let fontFamily = Fonts.regular;

    if (styles?.fontWeight) {
      styles.fontWeight = styles?.fontWeight?.toString() as '100';
    }

    let fontWeight = styles?.fontWeight;

    if (Platform.OS == 'android') {
      fontWeight = undefined;

      if (styles?.fontWeight) {
        switch (styles?.fontWeight) {
          case '100':
            fontFamily = Fonts.thin;
            break;
          case '200':
            fontFamily = Fonts.light;
            break;
          case '300':
            fontFamily = Fonts.light;
            break;
          case '400':
            fontFamily = Fonts.regular;
            break;
          case '500':
            fontFamily = Fonts.medium;
            break;
          case '600':
            fontFamily = Fonts.semiBold;
            break;
          case '700':
          case 'bold':
            fontFamily = Fonts.bold;
            break;
          case '800':
            fontFamily = Fonts.extraBold;
            break;
          case '900':
            fontFamily = Fonts.black;
            break;
        }
      }
      delete styles.fontWeight;
      if (styles?.fontStyle == 'italic' && fontFamily != Fonts.regular) {
        fontFamily = fontFamily + 'Italic';
        delete styles.fontStyle;
      }
    }

    return {
      textStyle: {
        color: Colors.textPrimary,
        fontFamily,
        fontWeight,
        ...styles,
        includeFontPadding: false,
      },
    };
  }, [style]);

  return (
    <RNText
      {...rest}
      style={styles.textStyle}
      allowFontScaling={false}
      suppressHighlighting={true}
    />
  );
};

export default Text;

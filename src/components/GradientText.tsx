import MaskedView from '@react-native-masked-view/masked-view';
import { useTheme } from '@theme/ThemeProvider';
import React from 'react';
import { TextProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from './Text';

interface IGradientTextProps extends TextProps {
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

const GradientText: React.FC<IGradientTextProps> = ({
  start = { x: 0, y: 0 },
  end = { x: 0.5, y: 0 },
  colors,
  ...rest
}) => {
  const { colors: themeColors } = useTheme();

  return (
    <MaskedView maskElement={<Text {...rest} />}>
      <LinearGradient
        colors={
          colors ? colors : [themeColors.textSecondary, themeColors.textBlue]
        }
        start={start}
        end={end}
      >
        <Text {...rest} style={[rest.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;

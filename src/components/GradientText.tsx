import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import { TextProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../assets/colors';
import Text from './Text';

const GradientText: React.FC<TextProps> = props => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={[Colors.textSecondary, Colors.textBlue]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.8, y: 0 }}
      >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;

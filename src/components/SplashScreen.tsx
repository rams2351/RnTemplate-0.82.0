import React from 'react';
import { StyleSheet } from 'react-native';
import GradientBackground from './GradientBackground';
import Text from './Text';

const SplashScreen: React.FC = () => {
  return (
    <GradientBackground
      style={styles.container}
      colors={['#FF5F9E', '#8458FF']} // 💖 pink to purple
      start={{ x: 0.0, y: 0.2 }} // gradient starts slightly left-top
      end={{ x: 0.8, y: 1 }}
    >
      <Text>Online Dating App</Text>
    </GradientBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

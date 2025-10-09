import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FontText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lexendRegular}>
        This text uses Lexend Regular font
      </Text>
      <Text style={styles.lexendLight}>This text uses Lexend Light font</Text>
      <Text style={styles.lexendMedium}>This text uses Lexend Medium font</Text>
      <Text style={styles.lexendBold}>This text uses Lexend Bold font</Text>
    </View>
  );
};

export default FontText;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lavender',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lexendLight: {
    fontFamily: 'Lexend-Light', // or 'Lexend_300Light' if using Expo Google Fonts
    fontSize: 20,
  },
  lexendRegular: {
    fontFamily: 'Lexend-Regular', // or 'Lexend_400Regular'
    fontSize: 20,
  },
  lexendMedium: {
    fontFamily: 'Lexend-Medium', // or 'Lexend_500Medium'
    fontSize: 20,
  },
  lexendBold: {
    fontFamily: 'Lexend-Bold', // or 'Lexend_700Bold'
    fontSize: 20,
  },
});

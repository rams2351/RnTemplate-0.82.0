import Button from '@components/Button';
import { Card } from '@components/Card';
import GradientText from '@components/GradientText';
import Row from '@components/Row';
import SafeAreaView from '@components/SafeAreaView';
import Text from '@components/Text';
import { useAuth } from '@hooks/useAuth';
import NavigationService from '@services/NavigationService';
import { useTheme } from '@theme/ThemeProvider';
import { scaler } from '@utils/helpers';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const HomeScreen: React.FC = () => {
  const { setIsLogin } = useAuth();
  const { toggleTheme } = useTheme();

  return (
    <SafeAreaView>
      <Card style={{ margin: scaler(20), width: 'auto' }}>
        <View>
          <Button variant="outline" title="Logout Button">
            <GradientText style={styles.gradient}>HomeScreen</GradientText>
          </Button>
          <Button
            variant="outline"
            title="Logout Button"
            onPress={() => setIsLogin(false)}
          ></Button>
          <Button variant="link" title="Logout Button"></Button>

          <TouchableOpacity onPress={() => setIsLogin(false)}>
            <Text>Logout</Text>
          </TouchableOpacity>
          <Row>
            <TouchableOpacity
              onPress={() => NavigationService.navigate('ProfileScreen')}
            >
              <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => NavigationService.push('FontText')}
            >
              <Text>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleTheme}>
              <Text>Toggle Theme</Text>
            </TouchableOpacity>
          </Row>
        </View>
      </Card>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  gradient: {
    fontSize: scaler(20),
    margin: scaler(5),
  },
});

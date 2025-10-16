import Button from '@components/Button';
import SafeAreaView from '@components/SafeAreaView';
import Select from '@components/Select';
import Text from '@components/Text';
import TextInput from '@components/TextInput';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import { useTheme } from '@theme/ThemeProvider';
import { scaler } from '@utils/helpers';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const options = [
  { label: 'iOS', value: 'ios' },
  { label: 'Android', value: 'android' },
  { label: 'React Native', value: 'react-native' },
];

const UIcomponents: React.FC = () => {
  const [text, setText] = useState('');
  const { toggleTheme, colors } = useTheme();

  const [platform, setPlatform] = useState(null);

  return (
    <SafeAreaView style={{ padding: 30 }}>
      <Text>TEXT: {text}</Text>

      <Button onPress={toggleTheme} title="THEME" />

      <Select
        label="Select Platform"
        placeholder="Choose platform"
        data={options}
        value={platform}
        onChange={setPlatform}
        // startIcon={
        //   <AntDesign
        //     name="mobile"
        //     size={scaler(16)}
        //     color={colors.primary}
        //     style={{ paddingHorizontal: scaler(5) }}
        //   />
        // }
        error={!platform ? 'Platform is required' : ''}
      />

      <TextInput
        label="Title"
        value={text}
        onChangeText={setText}
        placeholder="Search here...."
        endIcon={
          <TouchableOpacity>
            <FontAwesome name="heartbeat" />
          </TouchableOpacity>
        }
        error="This is the error"
        editable={false}
      />

      <TextInput
        label="Title"
        value={text}
        onChangeText={setText}
        placeholder="Search here...."
        startIcon={
          <TouchableOpacity>
            <FontAwesome name="heart-o" color={colors.primary} />
          </TouchableOpacity>
        }
        endIcon={
          <TouchableOpacity>
            <FontAwesome name="heartbeat" color={colors.primary} />
          </TouchableOpacity>
        }
        style={{
          borderRadius: scaler(13),
        }}
        containerStyle={{
          marginTop: scaler(70),
          marginVertical: 0,
        }}
      />
      <Text>UIcomponents</Text>
    </SafeAreaView>
  );
};

export default UIcomponents;

const styles = StyleSheet.create({});

import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

function GoBackButton() {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={handleGoBack}>
      <Svg width={11} height={20} viewBox="0 0 11 20" fill="none">
        <Path
          d="M10.62.99a1.25 1.25 0 00-1.77 0L.54 9.3a.996.996 0 000 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L3.38 10l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
          fill="#fff"
        />
      </Svg>
    </TouchableOpacity>
  );
}

export default GoBackButton;

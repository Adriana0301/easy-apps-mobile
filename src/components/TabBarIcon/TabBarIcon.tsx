import { View } from 'react-native';
import Colors from '../../theme/colors';
import styles from './TabBarIcon.styles';

type TabBarIconProps = {
  focused: boolean;
  Icon: any;
};

const TabBarIcon = ({ focused, Icon }: TabBarIconProps) => {
  return (
    <View style={[styles.container, focused && styles.selectedContainer]}>
      <Icon color={focused ? Colors.white : Colors.black} />
    </View>
  );
};
export default TabBarIcon;

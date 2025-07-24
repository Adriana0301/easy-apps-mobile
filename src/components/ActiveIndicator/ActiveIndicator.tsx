import { ActivityIndicator, View } from 'react-native';
import Colors from '../../theme/colors';

type IActivityIndicator = { size?: number; color?: string };

const ActiveIndicator: React.FC<IActivityIndicator> = ({
  size = 27,
  color = Colors.black,
}) => {
  return (
    <View>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default ActiveIndicator;

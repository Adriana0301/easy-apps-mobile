import { GestureResponderEvent, TouchableOpacity } from 'react-native';

type IconButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  Icon: React.ComponentType;
};
const IconButton: React.FC<IconButtonProps> = ({ onPress, Icon }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon />
  </TouchableOpacity>
);

export default IconButton;

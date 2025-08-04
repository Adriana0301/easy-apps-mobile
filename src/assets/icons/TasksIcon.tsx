import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type IconProps = {
  color: string;
};
const TasksIcon = ({ color }: IconProps) => {
  return (
    <View>
      <Svg width={32} height={27} viewBox="0 0 32 27" fill="none">
        <Path
          d="M26.36 3.773l1.867 1.867L11.24 22.627 3.773 15.16l1.867-1.867 5.6 5.6 15.12-15.12zm0-3.773L11.24 15.12l-5.6-5.6L0 15.16 11.24 26.4 32 5.64 26.36 0z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default TasksIcon;

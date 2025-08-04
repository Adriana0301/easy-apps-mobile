import Svg, { Path } from 'react-native-svg';

type IconProps = {
  color: string;
};

const AllTasksIcon = ({ color }: IconProps) => {
  return (
    <Svg width={27} height={26} viewBox="0 0 27 26" fill="none">
      <Path
        d="M16 5.333V2.667h-5.333v2.666H16zm-13.333 4v12c0 .734.6 1.334 1.333 1.334h18.667c.733 0 1.333-.6 1.333-1.334v-12C24 8.6 23.4 8 22.667 8H4c-.733 0-1.333.6-1.333 1.333zm21.333-4A2.657 2.657 0 0126.667 8v14.667A2.657 2.657 0 0124 25.333H2.667A2.657 2.657 0 010 22.667L.013 8a2.646 2.646 0 012.654-2.667H8V2.667A2.657 2.657 0 0110.667 0H16a2.657 2.657 0 012.667 2.667v2.666H24z"
        fill={color}
      />
    </Svg>
  );
};

export default AllTasksIcon;

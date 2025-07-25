import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const EditIcon = () => {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
      <Rect
        x={0.5}
        y={0.5}
        width={29}
        height={29}
        rx={14.5}
        fill="#fff"
        stroke="#000"
      />
      <Path
        d="M16.888 12.268l.844.844-8.305 8.305h-.844v-.844l8.305-8.305zm3.3-5.518a.917.917 0 00-.641.266l-1.678 1.677 3.438 3.438 1.677-1.678a.913.913 0 000-1.292L20.84 7.016a.9.9 0 00-.65-.266zm-3.3 2.924L6.75 19.813v3.437h3.438l10.138-10.138-3.438-3.438z"
        fill="#6871EE"
      />
    </Svg>
  );
};

export default EditIcon;

import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const ChangeIcon = () => {
  return (
    <Svg width={30} height={28} viewBox="0 0 30 28" fill="none">
      <Rect x={0.803955} width={28.8372} height={28} rx={14} fill="#F0F0F0" />
      <Path
        transform="translate(4.649 3.733)"
        fill="#F0F0F0"
        d="M0 0H21.1473V20.5333H0z"
      />
      <Path
        d="M17.038 11.45l.81.788-7.983 7.75h-.81v-.786l7.983-7.752zM20.21 6.3c-.22 0-.45.086-.617.248L17.98 8.114l3.305 3.208 1.612-1.566a.835.835 0 000-1.206l-2.062-2.002a.879.879 0 00-.625-.248zm-3.172 2.73l-9.746 9.462V21.7h3.305l9.745-9.462-3.304-3.209z"
        fill="#6871EE"
      />
    </Svg>
  );
};

export default ChangeIcon;

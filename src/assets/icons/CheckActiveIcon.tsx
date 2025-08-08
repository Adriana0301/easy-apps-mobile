import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

const CheckActiveIcon = () => {
  return (
    <Svg width={23} height={22} viewBox="0 0 23 22" fill="none">
      <Rect width={23} height={22} rx={8} fill="#6871EE" />
      <G clipPath="url(#clip0_15_109)">
        <Path
          d="M18.14 5.813a.746.746 0 010 1.042l-8.22 8.44a.7.7 0 01-1.015 0l-3.044-3.126a.746.746 0 010-1.042.7.7 0 011.014 0l2.537 2.605 7.713-7.919a.7.7 0 011.014 0zm-1.53-1.578l-7.198 7.39L7.39 9.55a1.426 1.426 0 00-2.051 0l-1.015 1.042a1.52 1.52 0 000 2.106l4.06 4.168c.564.58 1.485.58 2.05 0l9.242-9.482a1.52 1.52 0 000-2.106l-1.015-1.042a1.426 1.426 0 00-2.051 0z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_15_109">
          <Path fill="#fff" transform="translate(3 2)" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CheckActiveIcon;

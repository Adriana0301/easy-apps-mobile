import * as React from 'react';
import Svg, { ClipPath, Defs, G, Mask, Path, Rect } from 'react-native-svg';

const BinIcon = () => {
  return (
    <Svg width={30} height={28} viewBox="0 0 30 28" fill="none">
      <Rect x={0.60791} width={28.8372} height={28} rx={14} fill="#F0F0F0" />
      <G clipPath="url(#clip0_1_225)">
        <Mask
          id="a"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={4}
          y={3}
          width={22}
          height={22}
        >
          <Path d="M25.6 3.733H4.453v20.534H25.6V3.733z" fill="#fff" />
        </Mask>
        <G mask="url(#a)">
          <Path
            d="M9.74 19.989c0 .941.793 1.711 1.762 1.711h7.05c.968 0 1.761-.77 1.761-1.711v-8.556c0-.94-.793-1.71-1.762-1.71h-7.049c-.97 0-1.762.77-1.762 1.71v8.556zm2.643-8.556h5.287c.485 0 .881.385.881.856v6.844c0 .47-.396.856-.881.856h-5.287c-.484 0-.88-.385-.88-.856V12.29c0-.47.396-.856.88-.856zm5.728-4.277l-.626-.608a.903.903 0 00-.617-.248h-3.683a.903.903 0 00-.617.248l-.625.608H9.74c-.485 0-.881.385-.881.855s.396.856.88.856h10.574c.485 0 .882-.385.882-.856 0-.47-.397-.855-.882-.855h-2.202z"
            fill="#6871EE"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_1_225">
          <Path
            fill="#fff"
            transform="translate(4.453 3.733)"
            d="M0 0H21.1473V20.5333H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default BinIcon;

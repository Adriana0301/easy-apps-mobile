import * as React from 'react';
import Svg, { ClipPath, Defs, G, Mask, Path, Rect } from 'react-native-svg';

const DeleteIcon = () => {
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
      <G clipPath="url(#clip0_1_129)">
        <Mask
          id="a"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={4}
          y={4}
          width={22}
          height={22}
        >
          <Path d="M26 4H4v22h22V4z" fill="#fff" />
        </Mask>
        <G mask="url(#a)">
          <Path
            d="M9.5 21.417c0 1.008.825 1.833 1.833 1.833h7.334a1.839 1.839 0 001.833-1.833V12.25a1.839 1.839 0 00-1.833-1.833h-7.334A1.839 1.839 0 009.5 12.25v9.167zm2.75-9.167h5.5a.92.92 0 01.917.917V20.5a.92.92 0 01-.917.917h-5.5a.92.92 0 01-.917-.917v-7.333a.92.92 0 01.917-.917zm5.958-4.583l-.65-.651a.925.925 0 00-.642-.266h-3.832c-.238 0-.476.1-.641.266l-.651.65H9.5a.92.92 0 00-.917.917.92.92 0 00.917.917h11a.92.92 0 00.917-.917.92.92 0 00-.917-.916h-2.292z"
            fill="#6871EE"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_1_129">
          <Path fill="#fff" transform="translate(4 4)" d="M0 0H22V22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default DeleteIcon;

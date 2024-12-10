import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const ShopIcon = (props: any) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_303_2901)">
      <Path
        d="M2 9H5"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 13.5H5"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.375 17.25C17.8958 17.25 20.75 14.3958 20.75 10.875C20.75 7.35418 17.8958 4.5 14.375 4.5C10.8542 4.5 8 7.35418 8 10.875C8 14.3958 10.8542 17.25 14.375 17.25Z"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.25 15.75L23 19.5"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_303_2901">
        <Rect width={24} height={24} fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ShopIcon;

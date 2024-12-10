import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const BagIcon = (props: any) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_303_2914)">
      <Path
        d="M8.14697 4.5C8.14697 3.11929 9.26626 2 10.647 2H15.1176C16.4008 2 17.4411 3.04028 17.4411 4.32353V4.32353C17.4411 5.60678 16.4008 6.64706 15.1176 6.64706H8.14697V4.5Z"
        stroke={props.color}
        strokeWidth={2}
      />
      <Path
        d="M19.7647 6.64697H22.0882V19.2499C22.0882 20.6306 20.9689 21.7499 19.5882 21.7499H6C4.61929 21.7499 3.5 20.6306 3.5 19.2499V6.64697H13.9559"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_303_2914">
        <Rect width={24} height={24} fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BagIcon;

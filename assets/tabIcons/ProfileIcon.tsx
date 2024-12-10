import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const ProfileIcon = (props: any) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_303_2920)">
      <Path
        d="M12.5585 10.9412C15.0275 10.9412 17.0291 8.93963 17.0291 6.47059C17.0291 4.00155 15.0275 2 12.5585 2C10.0894 2 8.08789 4.00155 8.08789 6.47059C8.08789 8.93963 10.0894 10.9412 12.5585 10.9412Z"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.5 20.9998V20.9998C2.5 17.2963 5.50233 14.2939 9.20588 14.2939H15.9118C19.6153 14.2939 22.6176 17.2963 22.6176 20.9998V20.9998"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_303_2920">
        <Rect width={24} height={24} fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ProfileIcon;

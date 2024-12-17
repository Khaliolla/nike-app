import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const FavoritIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_303_2909)">
      <Path
        d="M12.0001 21.0001L20.3776 12.5026C21.2568 11.6234 21.7507 10.431 21.7507 9.18763C21.7507 7.94426 21.2568 6.75182 20.3776 5.87263C19.4984 4.99344 18.306 4.49951 17.0626 4.49951C15.8193 4.49951 14.6268 4.99344 13.7476 5.87263L12.0001 7.50013L10.2526 5.87263C9.37344 4.99344 8.181 4.49951 6.93763 4.49951C5.69426 4.49951 4.50182 4.99344 3.62263 5.87263C2.74344 6.75182 2.24951 7.94426 2.24951 9.18763C2.24951 10.431 2.74344 11.6234 3.62263 12.5026L12.0001 21.0001Z"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_303_2909">
        <Rect width={24} height={24} fill={props.color} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default FavoritIcon;

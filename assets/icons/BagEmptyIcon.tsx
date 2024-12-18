import * as React from "react";
import Svg, { G, Circle, Path, Defs, ClipPath, Rect } from "react-native-svg";
const BagEmptyIcon = (props: any) => (
  <Svg
    width={100}
    height={100}
    viewBox="0 0 61 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_46_6848)">
      <Circle cx={30.5} cy={30} r={29} stroke="black" strokeWidth={2} />
      <Path
        d="M23 20C23 18.6193 24.1193 17.5 25.5 17.5H33C34.3807 17.5 35.5 18.6193 35.5 20V20C35.5 21.3807 34.3807 22.5 33 22.5H23V20Z"
        stroke="black"
        strokeWidth={2}
      />
      <Path
        d="M37.6875 22.5H40.5V40C40.5 41.3807 39.3807 42.5 38 42.5H20.5C19.1193 42.5 18 41.3807 18 40V22.5H30.6562"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_46_6848">
        <Rect width={60} height={60} fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BagEmptyIcon;

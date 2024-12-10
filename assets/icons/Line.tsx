import * as React from "react";
import Svg from "react-native-svg";
import { Line } from "react-native-svg";

const LineIcon = (props: any) => (
  <Svg
    width={350}
    height={2}
    viewBox="0 0 300 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Line y1={0.5} x2={300} y2={0.5} stroke="#000" />
  </Svg>
);
export default LineIcon;

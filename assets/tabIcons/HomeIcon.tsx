import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const HomeIcon = (props:any) => (
<>
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_303_2818)">
      <Path
        d="M12.5044 3.19487C12.3663 3.06917 12.1863 2.99951 11.9995 2.99951C11.8128 2.99951 11.6328 3.06917 11.4947 3.19487L3.99469 10.2767C3.91751 10.3471 3.85587 10.4328 3.81374 10.5284C3.7716 10.624 3.74989 10.7273 3.75 10.8317V19.4999C3.75 19.6988 3.82902 19.8895 3.96967 20.0302C4.11032 20.1708 4.30109 20.2499 4.5 20.2499H19.5C19.6989 20.2499 19.8897 20.1708 20.0303 20.0302C20.171 19.8895 20.25 19.6988 20.25 19.4999V10.8317C20.25 10.7272 20.2281 10.6239 20.1858 10.5283C20.1435 10.4327 20.0817 10.347 20.0044 10.2767L12.5044 3.19487Z"
        stroke= {props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_303_2818">
        <Rect width={24} height={24} fill={props.color}/>
      </ClipPath>
    </Defs>
  </Svg>
  </>
);
export default HomeIcon;

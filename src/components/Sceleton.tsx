import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const Sceleton = (props: any) => (
  <ContentLoader 
    speed={3}
    width={"100%"}
    height={370}
    viewBox="0 0 340 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="0" y="5" rx="0" ry="0" width="200" height="200" /> 
    <Rect x="0" y="212" rx="0" ry="0" width="196" height="20" /> 
    <Rect x="0" y="237" rx="0" ry="0" width="117" height="18" /> 
    <Rect x="212" y="6" rx="0" ry="0" width="125" height="197" /> 
    <Rect x="213" y="213" rx="0" ry="0" width="115" height="20" /> 
    <Rect x="215" y="237" rx="0" ry="0" width="93" height="16" />
  </ContentLoader>
)

export default Sceleton

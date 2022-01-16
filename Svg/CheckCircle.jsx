import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"

function CheckCircle(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={24} height={24} rx={12} fill="#E3FFF1" />
      <Path
        d="M16 9l-5.5 5.5L8 12"
        stroke="#1FCC79"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CheckCircle

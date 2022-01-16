import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function TimeCircle(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M21.25 12A9.25 9.25 0 0112 21.25 9.25 9.25 0 012.75 12 9.25 9.25 0 0112 2.75 9.25 9.25 0 0121.25 12z"
        stroke="#9FA5C0"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.431 14.943l-3.77-2.25V7.848"
        stroke="#9FA5C0"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default TimeCircle

import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function Msgicon(props) {
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
        d="M17.268 9.061l-4.266 3.434a2.223 2.223 0 01-2.746 0L5.954 9.061"
        stroke="#2E3E5C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M6.888 3.5h9.428c1.36.015 2.653.59 3.58 1.59a5.017 5.017 0 011.326 3.704v6.528a5.017 5.017 0 01-1.326 3.704 4.957 4.957 0 01-3.58 1.59H6.888C3.968 20.616 2 18.241 2 15.322V8.794C2 5.875 3.968 3.5 6.888 3.5z"
        stroke="#2E3E5C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Msgicon
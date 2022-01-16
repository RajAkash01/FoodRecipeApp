import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function UpArrow(props) {
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
        d="M6.252 15.824a.999.999 0 001.089-.905l.516-5.65 8.386 8.387a1 1 0 001.414-1.414L9.271 7.855l5.65-.516a1.001 1.001 0 00-.184-1.994l-7.778.707-.17.043-.141.042a1 1 0 00-.51.51l-.042.14-.042.17-.707 7.779a1 1 0 00.905 1.088z"
        fill="#9FA5C0"
      />
    </Svg>
  )
}

export default UpArrow

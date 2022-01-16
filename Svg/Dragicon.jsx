import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function Dragicon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.5 14a2 2 0 100-4 2 2 0 000 4zM15.5 14a2 2 0 100-4 2 2 0 000 4zM8.5 7a2 2 0 100-4 2 2 0 000 4zM15.5 7a2 2 0 100-4 2 2 0 000 4zM8.5 21a2 2 0 100-4 2 2 0 000 4zM15.5 21a2 2 0 100-4 2 2 0 000 4z"
        fill="#9FA5C0"
      />
    </Svg>
  )
}

export default Dragicon

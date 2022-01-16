import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function Backbuttonforsearch(props) {
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
        d="M13.83 19a1 1 0 01-.78-.37l-4.83-6a1 1 0 010-1.27l5-6a1.001 1.001 0 011.54 1.28L10.29 12l4.32 5.36a1 1 0 01-.78 1.64z"
        fill="#2E3E5C"
      />
    </Svg>
  )
}

export default Backbuttonforsearch
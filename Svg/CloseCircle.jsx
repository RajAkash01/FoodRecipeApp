import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function CloseCircle(props) {
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
        d="M12 2a10 10 0 100 20 10 10 0 000-20zm2.71 11.29a1.002 1.002 0 01-.325 1.639 1 1 0 01-1.095-.219L12 13.41l-1.29 1.3a1.002 1.002 0 01-1.639-.325 1 1 0 01.219-1.095l1.3-1.29-1.3-1.29a1.004 1.004 0 011.42-1.42l1.29 1.3 1.29-1.3a1.004 1.004 0 011.42 1.42L13.41 12l1.3 1.29z"
        fill="#2E3E5C"
      />
    </Svg>
  )
}

export default CloseCircle

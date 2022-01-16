import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function Plusforgroup(props) {
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
        d="M12.998 12.998l6.074.007a1.004 1.004 0 100-2.009l-6.074.007.007-6.074a1.004 1.004 0 00-2.009 0l.008 6.074-6.075-.007a.998.998 0 00-1.004 1.005 1 1 0 001.004 1.004l6.075-.008-.008 6.075a.999.999 0 001.005 1.004.999.999 0 001.004-1.005l-.008-6.074z"
        fill="#3E5481"
      />
    </Svg>
  )
}

export default Plusforgroup

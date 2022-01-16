import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"

function Filtericonforsearch(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.878 6.379c0 1.866-1.54 3.38-3.44 3.38C3.54 9.758 2 8.244 2 6.378 2 4.513 3.54 3 5.439 3c1.9 0 3.439 1.513 3.439 3.379zm11.615-1.48c.831 0 1.507.663 1.507 1.48s-.676 1.48-1.507 1.48h-6.575c-.832 0-1.508-.663-1.508-1.48s.676-1.48 1.508-1.48h6.575zM3.508 15.957h6.575c.832 0 1.508.664 1.508 1.481 0 .817-.675 1.482-1.508 1.482H3.508C2.676 18.92 2 18.256 2 17.439s.676-1.481 1.508-1.481zm15.053 4.82c1.9 0 3.439-1.513 3.439-3.379 0-1.867-1.539-3.38-3.439-3.38-1.899 0-3.439 1.514-3.439 3.38 0 1.866 1.54 3.379 3.44 3.379z"
        fill="#2E3E5C"
      />
      <Circle cx={20} cy={4} r={3.5} fill="#1FCC79" stroke="#fff" />
    </Svg>
  )
}

export default Filtericonforsearch
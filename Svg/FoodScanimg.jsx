import * as React from "react"
import Svg, {
  SvgProps,
  Rect,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"

function FoodScanimg(props) {
  return (
    <Svg
      width={300}
      height={300}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Rect
        x={0.5}
        y={0.5}
        width={160}
        height={225}
        rx={15.5}
        fill="#fff"
        stroke="#D0DBEA"
      />
      <Path fill="url(#prefix__pattern0)" d="M26 38h101v78H26z" />
      <Path
        d="M59.144 158h2.306v-4.506h4.438v-1.902H61.45v-2.599h4.917v-1.902h-7.223V158zm12.328.16c2.482 0 4.027-1.699 4.027-4.219 0-2.535-1.545-4.229-4.027-4.229s-4.027 1.694-4.027 4.229c0 2.52 1.545 4.219 4.027 4.219zm.01-1.758c-1.145 0-1.73-1.049-1.73-2.477 0-1.427.585-2.482 1.73-2.482 1.124 0 1.71 1.055 1.71 2.482 0 1.428-.585 2.477-1.71 2.477zm9.69 1.758c2.481 0 4.026-1.699 4.026-4.219 0-2.535-1.545-4.229-4.027-4.229s-4.027 1.694-4.027 4.229c0 2.52 1.545 4.219 4.027 4.219zm.01-1.758c-1.145 0-1.731-1.049-1.731-2.477 0-1.427.586-2.482 1.73-2.482 1.125 0 1.71 1.055 1.71 2.482 0 1.428-.585 2.477-1.71 2.477zm9.007 1.731c1.32 0 2.008-.762 2.322-1.443h.096V158h2.237v-10.909H92.58v4.101h-.069c-.304-.665-.959-1.48-2.328-1.48-1.795 0-3.313 1.395-3.313 4.208 0 2.738 1.454 4.213 3.319 4.213zm.719-1.806c-1.114 0-1.72-.99-1.72-2.418 0-1.417.596-2.392 1.72-2.392 1.102 0 1.72.933 1.72 2.392 0 1.46-.628 2.418-1.72 2.418z"
        fill="#3E5481"
      />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.001 0 0 .00129 -.044 -.051)"
          />
        </Pattern>
        <Image id="prefix__image0" width={1113} height={876} />
      </Defs>
    </Svg>
  )
}

export default FoodScanimg

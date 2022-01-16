import * as React from "react"
import Svg, { SvgProps, G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Backbutton(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
          <Path d="M25 1C11.767 1 1 11.767 1 25s10.767 24 24 24 24-10.767 24-24S38.233 1 25 1zm0 46C12.869 47 3 37.131 3 25S12.869 3 25 3s22 9.869 22 22-9.869 22-22 22z" />
          <Path d="M29.293 10.293L14.586 25l14.707 14.707 1.414-1.414L17.414 25l13.293-13.293z" />
        </Svg>
      )
    }
    

export default Backbutton

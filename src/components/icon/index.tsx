import *as React from 'react';
import  './importIcons.ts';
 
import *as styles from './index.less';

console.log(styles)
interface IconProps {
  type: string,
  style:object,
  onClick:React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <i style={props.style}>
      <svg width={"1em"} height={"1em"} fill={"currentcolor"} onClick={props.onClick}> 
        <use xlinkHref={`#${props.type}`} ></use>
      </svg>
    </i>
  )
}

export default Icon;

 
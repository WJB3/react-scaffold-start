import *as React from 'react';
import './importIcons.ts';
import classes from '../helpers/classnames';
import './index.less';

interface IconProps extends React.SVGAttributes<SVGElement> {
  type?: string,
  style?: object,
  spin?:Boolean,
}

const Icon: React.FunctionComponent<IconProps> = (props) => {

  const {className,spin,style,type,...restProps}=props;

  return (
    <i style={style}>
      <svg width={"1em"} height={"1em"} fill={"currentcolor"}
        className={classes('baby-icon',className,type==="loading"?"baby-icon--loading":"",{
          [`baby-icon--spin`]:spin
        })}
        {...restProps}
      >
        <use xlinkHref={`#${type}`} ></use>
      </svg>
    </i>
  )
}

export default Icon;


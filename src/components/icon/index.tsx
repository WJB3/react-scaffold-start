import *as React from 'react';
import  './icons/wechat.svg';

interface IconProps {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = () => {
  return (
    <span>
      <svg>
        <use xlinkHref={"#wechat"}></use>
      </svg>
    </span>
  )
}

export default Icon;

 
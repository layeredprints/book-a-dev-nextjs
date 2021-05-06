import React from 'react';

import { Path } from './styles';

type Props = {
  color?: string;
  size?: number;
  isFlipped?: boolean;
};

const ArrowIcon = (props: Props): JSX.Element => {
  const { color = '#fff', size = 1, isFlipped = false } = props;

  return (
    <svg
      width={24 * size}
      height={24 * size}
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={isFlipped ? { transform: 'scaleX(-1)' } : {}}
    >
      <Path d="M8,0,0,8l8,8" transform="translate(2 2.828)" />
    </svg>
  );
};

export default ArrowIcon;

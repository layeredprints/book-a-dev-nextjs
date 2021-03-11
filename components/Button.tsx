import c from '../utils/c';

/* eslint-disable react/button-has-type */
const Button = ({
  type = 'button',
  label,
  iconBefore,
  iconAfter,
  outline = false,
  onClick,
} : {
  type?: 'button' | 'submit' | 'reset',
  label: string,
  iconBefore?: any,
  iconAfter?: any,
  outline?: boolean,
  onClick: (e: any) => void,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={c('px-6 py-2 rounded-full', {
      'border-2 border-bx-blue text-bx-blue': outline,
      'bg-bx-blue text-white': !outline,
    })}
  >
    {iconBefore}
    {label}
    {iconAfter}
  </button>

);

export default Button;

/* eslint-enable react/button-has-type */

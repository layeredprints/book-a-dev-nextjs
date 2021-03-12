import c from '../utils/c';

/* eslint-disable react/button-has-type */
const Button = ({
  type = 'button',
  label,
  iconBefore,
  iconAfter,
  outline = false,
  disabled = false,
  onClick,
} : {
  type?: 'button' | 'submit' | 'reset',
  label: string,
  iconBefore?: any,
  iconAfter?: any,
  outline?: boolean,
  disabled?: boolean,
  onClick: (e: any) => void,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={c('px-8 py-2 rounded-full font-openSans font-bold uppercase min-w-140', {
      'border-2 border-bx-blue text-bx-blue': outline,
      'bg-bx-blue text-white': !outline,
      'opacity-50 pointer-events-none cursor-not-allowed': disabled,
    })}
  >
    {iconBefore}
    {label}
    {iconAfter}
  </button>

);

export default Button;

/* eslint-enable react/button-has-type */

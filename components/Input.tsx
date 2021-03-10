import { ReactNode } from 'react';
import c from '../utils/c';
import Creatable from './Creatable';
import DatePicker from './DatePicker';

const Input = ({
  type,
  name,
  placeholder,
  defaultValue,
  className,
  cols = 4,
  rows = 10,
  min,
  max,
  label,
  onChange,
} : {
  type: 'text' | 'number' | 'checkbox' | 'radio' | 'textarea' | 'email' | 'tel' | 'date' | 'creatable',
  name: string,
  placeholder: string,
  defaultValue?: any,
  className?: string,
  cols?: number,
  rows?: number,
  min?: number,
  max?: number,
  label?: string,
  onChange: (e: any) => void,
}) => {
  const baseStyling = 'px-6 py-4 mb-6 border border-gray-400';
  const renderInput = () => {
    const inputLabel = label
      ? <label className="px-6 py-2 font-openSans font-extrabold" htmlFor={name}>{label}</label>
      : false;
    switch (type) {
      case 'number':
        return (
          <>
            {inputLabel}
            <input
              type="number"
              name={name}
              id={name}
              placeholder={placeholder}
              defaultValue={defaultValue}
              onChange={onChange}
              className={c(baseStyling, className)}
              min={min}
              max={max}
            />
          </>
        );
      case 'checkbox':
        return (
          <>
            {inputLabel}
            <input
              type="checkbox"
              name={name}
              id={name}
              placeholder={placeholder}
              defaultValue={defaultValue}
              onChange={onChange}
              className={c(baseStyling, className)}
            />
          </>
        );
      case 'radio':
        return (
          <>
            {inputLabel}
            <input
              type="radio"
              name={name}
              id={name}
              placeholder={placeholder}
              defaultValue={defaultValue}
              onChange={onChange}
              className={c(baseStyling, className)}
            />
          </>
        );
      case 'textarea':
        return (
          <>
            {inputLabel}
            <textarea
              name={name}
              id={name}
              placeholder={placeholder}
              className={c(baseStyling, className)}
              cols={cols}
              rows={rows}
            />
          </>
        );
      case 'email':
        return (
          <>
            {inputLabel}
            <input
              type="email"
              name={name}
              id={name}
              placeholder={placeholder}
              defaultValue={defaultValue}
              onChange={onChange}
              className={c(baseStyling, className)}
            />
          </>
        );
      case 'tel':
        return (
          <>
            {inputLabel}
            <input
              type="tel"
              name={name}
              id={name}
              placeholder={placeholder}
              defaultValue={defaultValue}
              onChange={onChange}
              className={c(baseStyling, className)}
            />
          </>
        );
      // case 'date':
      //   return (
      //     <DatePicker
      //       name={name}
      //       value={defaultValue}
      //       className={c('', className)}
      //       onChange={onChange}
      //     />
      //   );
      case 'creatable':
        return (
          <>
            <Creatable
              name={name}
              values={defaultValue}
              placeholder={placeholder}
              onChange={onChange}
              className={className}
            />
          </>
        );
      default:
        return (
          <>
            {inputLabel}
            <input
              type="text"
              name={name}
              id={name}
              placeholder={placeholder}
              defaultValue={defaultValue}
              onChange={onChange}
              className={c(baseStyling, className)}
            />
          </>
        );
    }
  };

  const input = (renderInput());

  return (
    input
  );
};

export default Input;

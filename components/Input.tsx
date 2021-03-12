import { ReactNode } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import c from '../utils/c';
import Creatable from './Creatable';

const Input = ({
  type,
  name,
  placeholder,
  value,
  defaultValue,
  className,
  cols = 4,
  rows = 10,
  min,
  max,
  minDate,
  maxDate,
  label,
  options,
  children,
  onChange,
} : {
  type?: 'text' | 'number' | 'customcheckbox' | 'customradio' | 'textarea' | 'email' | 'tel' | 'date' | 'creatable' | 'select',
  name: string,
  placeholder?: string,
  value?: any,
  defaultValue?: any,
  className?: string,
  cols?: number,
  rows?: number,
  min?: number,
  max?: number,
  minDate?: Date,
  maxDate?: Date,
  label?: string,
  options?: any[],
  children?: ReactNode,
  onChange: (e: any) => void,
}) => {
  const baseStyling = 'px-6 py-4 mb-6 border border-gray-400 focus:border-bx-blue';
  const renderInput = () => {
    const inputLabel = label
      ? <label className="py-2 font-openSans font-extrabold block cursor-pointer" htmlFor={name}>{label}</label>
      : false;
    switch (type) {
      case 'number':
        return (
          <div>
            {inputLabel}
            <input
              type="number"
              name={name}
              id={name}
              placeholder={placeholder}
              defaultValue={value}
              className={c(baseStyling, className)}
              min={min}
              max={max}
              onChange={onChange}
            />
          </div>
        );
      case 'customcheckbox':
        return (
          <div>
            <label htmlFor={value}>
              {children}
              <input
                type="checkbox"
                name={name}
                id={value}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                className="hidden"
              />
            </label>
          </div>
        );
      case 'customradio':
        return (
          <div>
            <label htmlFor={value}>
              {children}
              <input
                type="radio"
                name={name}
                id={value}
                value={value}
                className="hidden"
                onChange={onChange}
              />
            </label>
          </div>
        );
      case 'textarea':
        return (
          <div>
            {inputLabel}
            <textarea
              name={name}
              id={name}
              placeholder={placeholder}
              className={c(baseStyling, className)}
              cols={cols}
              rows={rows}
            />
          </div>
        );
      case 'email':
        return (
          <div>
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
          </div>
        );
      case 'tel':
        return (
          <div>
            {inputLabel}
            <input
              type="tel"
              name={name}
              id={name}
              placeholder={placeholder}
              defaultValue={defaultValue}
              onChange={onChange}
              value={value}
              className={c(baseStyling, className)}
            />
          </div>
        );
      case 'date':
        return (
          <div>
            {inputLabel}
            <DatePicker
              name={name}
              selected={defaultValue}
              className={c(baseStyling, className)}
              minDate={minDate}
              maxDate={maxDate}
              dateFormat="dd/MM/YYY"
              onChange={onChange}
            />
          </div>
        );
      case 'creatable':
        return (
          <div>
            <Creatable
              name={name}
              values={defaultValue}
              placeholder={placeholder}
              onChange={onChange}
              className={className}
            />
          </div>
        );
      case 'select':
        return (
          <div>
            {inputLabel}
            <Select
              className="c-dropdown__select"
              value={value}
              name={name}
              options={options}
              placeholder={placeholder}
              onChange={onChange}
            />
          </div>
        );
      default:
        return (
          <div>
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
          </div>
        );
    }
  };

  const input = (renderInput());

  return (
    input
  );
};

export default Input;

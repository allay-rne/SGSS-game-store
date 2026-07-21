import * as React from "react";
import classNames from 'classnames'
import './Checkbox.scss'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  count?: number;
}

const Checkbox = (props:CheckboxProps) => {
  const {
    className,
    label,
    count,
    ...rest
  } = props

  return (
    <label
      className={classNames(className, 'checkbox')}
    >
      <input
        className="checkbox__inner"
        type="checkbox"
        {...rest}
      />
      <span className="checkbox__label">{label}</span>
      <span className="checkbox__count">{count}</span>
    </label>
  )
}

export default Checkbox
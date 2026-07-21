import * as React from "react";
import classNames from 'classnames'
import './Checkbox.scss'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox = (props:CheckboxProps) => {
  const {
    className,
    label,
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
    </label>
  )
}

export default Checkbox
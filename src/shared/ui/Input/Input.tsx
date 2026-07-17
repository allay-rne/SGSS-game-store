import * as React from "react";
import classNames from 'classnames'
import Icon, {type IconName} from "@/shared/ui/Icon";
import './Input.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconName?: IconName;
}


const Input = (props:InputProps) => {
  const {
    className,
    iconName,
    ...rest
  } = props

  return (
    <div
      className={classNames( 'input', className)}
    >
      <input
        className="input__inner"
        {...rest}
      />
      {iconName && <Icon
        className="input__icon"
        name={iconName}
      />}
    </div>
  )
}

export default Input
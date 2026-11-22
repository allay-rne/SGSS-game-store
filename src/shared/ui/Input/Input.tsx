import * as React from "react";
import classNames from 'classnames'
import Icon, {type IconName} from "@/shared/ui/Icon";
import './Input.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconName?: IconName;
  onIconClick?: () => void;
  ref?: React.Ref<HTMLInputElement>;
}


const Input = (props:InputProps) => {
  const {
    className,
    iconName,
    onIconClick,
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
      {iconName && (onIconClick ? (
        <button
          className="input__icon-btn"
          type="button"
          aria-label="Close search"
          onClick={onIconClick}
        >
          <Icon className="input__icon" name={iconName} />
        </button>
      ) : (
        <Icon className="input__icon" name={iconName} />
      ))}
    </div>
  )
}

export default Input
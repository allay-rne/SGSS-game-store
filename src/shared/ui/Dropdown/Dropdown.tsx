import * as React from "react";
import classNames from 'classnames'
import Icon from "@/shared/ui/Icon";
import type {TypeDropdown} from "@/shared/ui/Dropdown/lib/typeDropdown.ts";
import './Dropdown.scss'

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: TypeDropdown[];
}

const Dropdown = (props:DropdownProps) => {
  const {
    className,
    options,
    ...rest
  } = props

  return (
    <div
      className={classNames(className, 'dropdown')}
    >
      <select
        className="dropdown__inner"
        {...rest}
      >
        {options.map(({title, value})=> (
          <option
            key={value}
            value={value}
          >
            {title}
          </option>
        ))}
      </select>

      <Icon
        name="up"
        className="dropdown__icon"/>
    </div>
  )
}

export default Dropdown
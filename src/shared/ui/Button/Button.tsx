import {Link} from "react-router-dom";
import Icon, {type IconName} from "@/shared/ui/Icon";
import classNames from "classnames";
import * as React from "react";
import './Button.scss'

type CommonProps = {
  mode?: '' | 'transparent';
  label: string;
  isLabelHidden?: boolean;
  iconName?: IconName;
  iconPosition?: 'after' | 'before';
}

type AsButton =
  CommonProps
  & { href?: undefined }
  & React.ButtonHTMLAttributes<HTMLButtonElement>
type AsLink = CommonProps & {
  href: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target']
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

type ButtonProps = AsButton | AsLink

const Button = (props: ButtonProps) => {
  const {
    className,
    mode,
    label,
    isLabelHidden,
    iconName,
    iconPosition,
  } = props

  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon
      className="button__icon"
      name={iconName}
    />
  )
  const content = (
    <>
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === 'after' && iconComponent}
    </>
  )
  const sharedClassName = classNames(className, 'button', {
    [`button--${mode}`]: mode,
  })

  if (props.href !== undefined) {
    const {
      href,
      target,
      className,
      mode,
      label,
      isLabelHidden,
      iconName,
      iconPosition,
      ...rest
    } = props
    const isExternal = href.startsWith('http') || href.startsWith('//')

    if (isExternal) {
      return (
        <a
          className={sharedClassName}
          title={title}
          aria-label={title}
          href={href}
          target={target} {...rest}>
          {content}
        </a>
      )
    }

    return (
      <Link
        className={sharedClassName}
        title={title}
        aria-label={title}
        to={href}
        target={target} {...rest}>
        {content}
      </Link>
    )
  }

  const {
    type,
    className: _className,
    mode: _mode,
    label: _label,
    isLabelHidden: _isLabelHidden,
    iconName: _iconName,
    iconPosition: _iconPosition,
    ...rest
  } = props
  return (
    <button
      className={sharedClassName}
      title={title}
      aria-label={title}
      type={type}
      {...rest}
    >
      {content}
    </button>
  )
}

export default Button
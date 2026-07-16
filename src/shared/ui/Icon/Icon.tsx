import * as React from "react";
import GmailIcon from '@/shared/assets/icons/gmail.svg?react'
import TelegramIcon from '@/shared/assets/icons/telegram.svg?react'
import GithubIcon from '@/shared/assets/icons/github.svg?react'
import './Icon.scss'

const icon = {
  gmail: GmailIcon,
  telegram: TelegramIcon,
  github: GithubIcon,
}

export type IconName = keyof typeof icon;

interface IconProps {
  name: IconName;
  ariaLabel?: string;
  style?: React.CSSProperties;
}

const Icon = (props: IconProps) => {
  const {
    name,
    ariaLabel,
    style,
  } = props

  const Component = icon[name]

  if (!Component) return null

  return (
    <span
      className="icon"
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      style={style}
    >
      <Component aria-hidden="true" />
    </span>
  )
}

export default Icon
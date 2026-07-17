import * as React from "react";
import classNames from "classnames";
import GmailIcon from '@/shared/assets/icons/gmail.svg?react';
import TelegramIcon from '@/shared/assets/icons/telegram.svg?react';
import GithubIcon from '@/shared/assets/icons/github.svg?react';
import FingerAuthIcon from '@/shared/assets/icons/fingerAuth.svg?react';
import SearchIcon from '@/shared/assets/icons/search.svg?react';
import BellIcon from '@/shared/assets/icons/notifications.svg?react';
import ShoppingIcon from '@/shared/assets/icons/shopping.svg?react';
import VkIcon from '@/shared/assets/icons/vk.svg?react';
import YoutubeIcon from '@/shared/assets/icons/youtube.svg?react';
import './Icon.scss'

const icon = {
  gmail: GmailIcon,
  telegram: TelegramIcon,
  github: GithubIcon,
  vk: VkIcon,
  youtube: YoutubeIcon,
  auth: FingerAuthIcon,
  search: SearchIcon,
  bell: BellIcon,
  basketShop: ShoppingIcon,
}

export type IconName = keyof typeof icon;

interface IconProps {
  className?: string;
  name: IconName;
  ariaLabel?: string;
  style?: React.CSSProperties;
}

const Icon = (props: IconProps) => {
  const {
    className,
    name,
    ariaLabel,
    style,
  } = props

  const Component = icon[name]

  if (!Component) return null

  return (
    <span
      className={classNames(className, 'icon')}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      style={style}
    >
      <Component aria-hidden="true" />
    </span>
  )
}

export default Icon
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
import HeartIcon from '@/shared/assets/icons/heart.svg?react';
import UpdateIcon from '@/shared/assets/icons/update.svg?react';
import DownloadGameIcon from '@/shared/assets/icons/downloadGame.svg?react';
import HistoryClockIcon from '@/shared/assets/icons/historyClock.svg?react';
import LightningIcon from '@/shared/assets/icons/lightning.svg?react';
import StarIcon from '@/shared/assets/icons/star.svg?react';
import ComingSoonIcon from '@/shared/assets/icons/squareClock.svg?react';
import SaleIcon from '@/shared/assets/icons/sale.svg?react';
import AimIcon from '@/shared/assets/icons/aim.svg?react';
import BackpackIcon from '@/shared/assets/icons/backpack.svg?react';
import RPGIcon from '@/shared/assets/icons/rpg.svg?react';
import ChessIcon from '@/shared/assets/icons/chess.svg?react';
import SailboatIcon from '@/shared/assets/icons/sailboat.svg?react';
import FootballIcon from '@/shared/assets/icons/football.svg?react';
import WheelIcon from '@/shared/assets/icons/wheel.svg?react';
import InfinityIcon from '@/shared/assets/icons/infinity.svg?react';
import GamepadIcon from '@/shared/assets/icons/gamepad.svg?react';
import VRIcon from '@/shared/assets/icons/vr.svg?react';

import './Icon.scss'

const icon = {
  //social
  gmail: GmailIcon,
  telegram: TelegramIcon,
  github: GithubIcon,
  vk: VkIcon,
  youtube: YoutubeIcon,
  //header
  auth: FingerAuthIcon,
  search: SearchIcon,
  bell: BellIcon,
  basketShop: ShoppingIcon,
  //sidebar main categories
  lightning: LightningIcon,
  star: StarIcon,
  comingSoon: ComingSoonIcon,
  sale: SaleIcon,
  aim: AimIcon,
  backpack: BackpackIcon,
  rpg: RPGIcon,
  chess: ChessIcon,
  sailboat: SailboatIcon,
  football: FootballIcon,
  wheel: WheelIcon,
  infinity: InfinityIcon,
  gamepad: GamepadIcon,
  vr: VRIcon,
  //sidebar main quick access
  heart: HeartIcon,
  update: UpdateIcon,
  downloadGame: DownloadGameIcon,
  historyClock: HistoryClockIcon,
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
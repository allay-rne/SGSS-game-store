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
import LogoutIcon from '@/shared/assets/icons/logout.svg?react';
import PersonIcon from '@/shared/assets/icons/person.svg?react';
import PrivacyIcon from '@/shared/assets/icons/lockPrivat.svg?react';
import SettingsIcon from '@/shared/assets/icons/settings.svg?react';
import KeyIcon from '@/shared/assets/icons/key.svg?react';
import BooksIcon from '@/shared/assets/icons/book.svg?react';
import MessageIcon from '@/shared/assets/icons/message.svg?react';
import AchievementsIcon from '@/shared/assets/icons/achievements.svg?react';
import ActivityIcon from '@/shared/assets/icons/activity.svg?react';
import UpIcon from '@/shared/assets/icons/upMinArr.svg?react';
import DollarIcon from '@/shared/assets/icons/dollar.svg?react';

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
  //sidebar profile
  books: BooksIcon,
  message: MessageIcon,
  achievements: AchievementsIcon,
  activity: ActivityIcon,
  //sidebar profile ACCOUNT
  person: PersonIcon,
  privacy: PrivacyIcon,
  settings: SettingsIcon,
  key: KeyIcon,
  logout: LogoutIcon,
  //sidebar shop Acc
  up: UpIcon,
  dollar: DollarIcon,
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
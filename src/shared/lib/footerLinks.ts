import type {IconName} from "@/shared/ui/Icon";

type FooterLink = {
  title: string;
  links: string[];
}

type SocialLink = {
  title: string;
  socialLinks: { label: string; iconName: IconName, href: string }[]
}


export type Links = FooterLink[]
export type SocialLinks = SocialLink[]

export const footerLinks: Links = [
  {
    title: 'Support',
    links: ['Support Center', 'Refunds', 'Terms of Service', 'Privacy Policy']
  },
  {
    title: 'SGSS',
    links: ['About Us', 'Careers', 'Partner Program', 'Contacts']
  },
  {
    title: 'Resources',
    links: ['Terms of Use', 'Privacy Policy', 'Community Guidelines', 'Sitemap']
  },
]

export const socialLinks: SocialLinks = [
  {
    title: 'Follow Us ',
    socialLinks: [
      {
        label: 'youtube',
        iconName: 'youtube',
        href: '/',
      },
      {
        label: 'telegram',
        iconName: 'telegram',
        href: 'https://t.me/AllAYOFFICIAL',
      },
      {
        label: 'github',
        iconName: 'github',
        href: 'https://github.com/allay-rne',
      },
      {
        label: 'gmail',
        iconName: 'gmail',
        href: 'mailto:allayrnw@gmail.com',
      },
      {
        label: 'vk',
        iconName: 'vk',
        href: 'https://vk.ru/allayvk',
      },
    ]
  },
]
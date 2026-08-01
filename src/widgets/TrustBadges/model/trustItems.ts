import type {IconName} from "@/shared/ui/Icon";

export interface TrustItem {
  iconName: IconName,
  title: string,
  subtitle: string,
}

export type TrustItems = TrustItem[]

export const trustItems: TrustItems = [
  {
    iconName: "shieldTry",
    title: "Secure Payments",
    subtitle: "All payments are protected with modern technology",
  },
  {
    iconName: "tag",
    title: "Great Deals",
    subtitle: "Regular discounts and promotions on your favorite games",
  },
  {
    iconName: "gift",
    title: "Rewards & Bonuses",
    subtitle: "Earn bonuses for purchases and platform activity",
  },
  {
    iconName: "headSet",
    title: "24/7 Support",
    subtitle: "Our team is always ready to help",
  },
]
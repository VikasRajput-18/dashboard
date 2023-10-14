import { LucideIcon } from "lucide-react";

export type navLinksProps = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type analyticsProps = {
  label: string;
  amount: number;
  profit: string;
  in_a: string;
  profit_status: boolean;
  icon: LucideIcon;
  bgColor: string;
  color: string;
};

export type productItemsProps = {
  title: string;
  description: string;
  stock: number;
  price: number;
  total_sales: number;
  image: string;
};

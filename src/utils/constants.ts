import {
  LayoutDashboard,
  PackageSearch,
  UserCircle,
  BadgePercent,
  Wallet,
  HelpCircle,
  CircleDollarSign,
  ShoppingBag,
  ScrollText,
} from "lucide-react";
import { analyticsProps, navLinksProps, productItemsProps } from "./type";

export const navLinks: navLinksProps[] = [
  {
    label: "Dashboard",
    href: "#",
    icon: LayoutDashboard,
  },
  {
    label: "Product",
    href: "#",
    icon: PackageSearch,
  },
  {
    label: "Customer",
    href: "#",
    icon: UserCircle,
  },
  {
    label: "Income",
    href: "#",
    icon: Wallet,
  },
  {
    label: "Promote",
    href: "#",
    icon: BadgePercent,
  },
  {
    label: "Help",
    href: "#",
    icon: HelpCircle,
  },
];

export const analytics: analyticsProps[] = [
  {
    label: "Earning",
    amount: 198,
    profit: "37.8%",
    in_a: "month",
    profit_status: true,
    icon: CircleDollarSign,
    bgColor: "#DCFEED",
    color: "#01AA4C",
  },
  {
    label: "Orders",
    amount: 198,
    profit: "2%",
    in_a: "month",
    profit_status: false,
    icon: ScrollText,
    bgColor: "#E7DBFF",
    color: "#A810FF",
  },
  {
    label: "Balance",
    amount: 198,
    profit: "2%",
    in_a: "month",
    profit_status: false,
    icon: Wallet,
    bgColor: "#CCF2FF",
    color: "#1967C5",
  },
  {
    label: "Total Sales",
    amount: 88,
    profit: "11%",
    in_a: "week",
    profit_status: true,
    icon: ShoppingBag,
    bgColor: "#FFB4DB",
    color: "#DD142D",
  },
];

export const data = [
  {
    name: "Jan",
    pv: 5400,
  },
  {
    name: "Feb",
    pv: 2398,
  },
  {
    name: "Mar",
    pv: 7000,
  },
  {
    name: "Apr",
    pv: 5500,
  },
  {
    name: "May",
    pv: 5700,
  },
  {
    name: "Jun",
    pv: 2000,
  },
  {
    name: "Jul",
    pv: 3000,
  },
  {
    name: "Aug",
    pv: 3500,
  },
  {
    name: "Sep",
    pv: 2800,
  },
  {
    name: "Oct",
    pv: 4000,
  },
  {
    name: "Nov",
    pv: 2200,
  },
  {
    name: "Dec",
    pv: 4800,
  },
];

export const productDetails: productItemsProps[] = [
  {
    title: "Abstract 3D",
    description:
      "Immersive digital art defying norms, sparking wonder in abstract dimensions",
    stock: 32,
    price: 45.99,
    total_sales: 20,
    image:
      "https://cdn.pixabay.com/photo/2016/09/29/13/08/planet-1702788_1280.jpg",
  },
  {
    title: "Ethereal Harmony",
    description: "Harmonious blend of forms, evoking a sense of serenity",
    stock: 32,
    price: 45.99,
    total_sales: 20,
    image:
      "https://cdn.pixabay.com/photo/2023/09/19/09/12/ethereal-connection-8262142_1280.jpg",
  },
  {
    title: "Transcendent Illusions",
    description: "Illusory landscapes challenging perception with every gaze",
    stock: 32,
    price: 45.99,
    total_sales: 20,
    image:
      "https://cdn.pixabay.com/photo/2014/09/25/20/01/breakthrough-460889_1280.png",
  },
  {
    title: "Abstract Fusion",
    description: "Dynamically fused shapes creating a mesmerizing spectacle",
    stock: 32,
    price: 45.99,
    total_sales: 20,
    image:
      "https://cdn.pixabay.com/photo/2016/01/18/19/42/fractal-1147253_1280.jpg",
  },
];

export const profileImage =
  "https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_1280.jpg";

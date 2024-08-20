interface Link {
  label: string;
  href: string;
}

export interface SidebarDataProps {
  title: string;
  links: Link[];
}

export const sidebarData: Array<SidebarDataProps> = [
  {
    title: "Getting Started",
    links: [
      { label: "Installation", href: "/components/installation" },
      { label: "Use", href: "/components/use" },
      { label: "Customize Components", href: "/components/customize" },
      { label: "Components", href: "/components" },
    ],
  },
  {
    title: "Components",
    links: [
      { label: "Accordion", href: "/components/accordion" },
      { label: "Alert", href: "/components/alert" },
      { label: "Avatar", href: "/components/avatar" },
      { label: "Button", href: "/components/button" },
      { label: "Card", href: "/components/card" },
      { label: "Card Carousel", href: "/components/card-carousel" },
      { label: "Carousel", href: "/components/carousel" },
      { label: "Clipboard", href: "/components/clipboard" },
      { label: "Drawer", href: "/components/drawer" },
      { label: "Dropdown", href: "/components/dropdown" },
      { label: "Footer", href: "/components/footer" },
      { label: "Hero Banner", href: "/components/hero-banner" },
      { label: "Icon Button", href: "/components/icon-button" },
      { label: "Icon Input", href: "/components/icon-input" },
      { label: "Icon Textarea", href: "/components/icon-textarea" },
      { label: "Input", href: "/components/input" },
      { label: "KBD", href: "/components/kbd" },
      { label: "Link", href: "/components/link" },
      { label: "Masonry", href: "/components/masonry" },
      { label: "Modal", href: "/components/modal" },
      { label: "Navbar", href: "/components/navbar" },
      { label: "Not Found", href: "/components/not-found" },
      { label: "Search Input", href: "/components/search-input" },
      { label: "Tabs", href: "/components/tabs" },
      { label: "Tooltip", href: "/components/tooltip" },
    ],
  },
] as const;

export interface OTPDataProps {
  title: string;
  href: string;
}

export const OTPData: Array<OTPDataProps> = [
  {
    title: "Default Installation",
    href: "#default-installation",
  },
  {
    title: "Dependencies",
    href: "#dependencies",
  },
] as const;
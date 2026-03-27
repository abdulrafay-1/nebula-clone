export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  cta: string;
}

export interface ReasonItem {
  icon: string;
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface TrustLogo {
  alt: string;
  src: string;
}

export interface FooterLinkGroup {
  title: string;
  links: Array<{ label: string; href: string }>;
}

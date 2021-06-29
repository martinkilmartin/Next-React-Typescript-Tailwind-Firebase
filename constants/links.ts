import { LINK, GROUP_LINKS } from '../interfaces/HTML'

export const HEADER_LINKS: LINK[] = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/about',
    text: 'About',
  },
  {
    path: '/contact',
    text: 'Contact',
  },
  {
    path: '/gallery',
    text: 'Gallery',
  },
]

export const COMPANY_LINKS: LINK[] = [
  {
    path: '/about',
    text: 'About Us',
  },
  {
    path: '/contact',
    text: 'Contact Us',
  },
  {
    path: '/gallery',
    text: 'Gallery',
  },
]

export const SOCIAL_LINKS: LINK[] = [
  {
    path: 'https://twitter.com/@yoo_._ie',
    text: 'Twitter',
    icon: 'twitter',
    target: '_blank',
  },
  {
    path: 'https://linkedin.com/@yoo_._ie',
    text: 'LinkedIn',
    icon: 'linkedin',
    target: '_blank',
  },
  {
    path: 'https://facebook.com/@yoo_._ie',
    text: 'Facebook',
    icon: 'facebbok',
    target: '_blank',
  },
  {
    path: 'https://instagram.com/@yoo_._ie',
    text: 'Instagram',
    icon: 'instagram',
    target: '_blank',
  },
  {
    path: 'https://reddit.com/@yoo_._ie',
    text: 'Reddit',
    icon: 'reddit',
    target: '_blank',
  },
]

export const LEGAL_LINKS: LINK[] = [
  {
    path: '#',
    text: 'Cookie Policy',
  },
  {
    path: '#',
    text: 'Privacy Policy',
  },
  {
    path: '#',
    text: 'Terms of Use',
  },
]

export const FOOTER_LINKS: GROUP_LINKS[] = [
  {
    title: 'Company',
    links: COMPANY_LINKS,
  },
  {
    title: 'Legal',
    links: LEGAL_LINKS,
  },
]

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
    path: '/blog',
    text: 'Blog',
  },
  {
    path: '/contact',
    text: 'Contact',
  },
  {
    path: '/products',
    text: 'Products',
  },
  {
    path: '/services',
    text: 'Services',
  },
  {
    path: '/tours',
    text: 'Tours',
  },
]

export const COMPANY_LINKS: LINK[] = [
  {
    path: '/about',
    text: 'About Us',
  },
  {
    path: '/blog',
    text: 'Blog',
  },
  {
    path: '/careers',
    text: 'Careers',
  },
  {
    path: '/media',
    text: 'Media Kit',
  },
  {
    path: '/news',
    text: 'News',
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
    path: '/cookies',
    text: 'Cookie Policy',
  },
  {
    path: '/privacy',
    text: 'Privacy Policy',
  },
  {
    path: '/terms',
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

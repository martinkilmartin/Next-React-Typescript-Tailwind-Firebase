import React from 'react'
import Head from 'next/head'
import Color from 'color'

type Props = {
  title: string
  appName?: string
  themeColor?: Color
  description: string
  ogURL: string
  ogTitle?: string
  ogImage: string
  ogImageAlt: string
  ogDescription?: string
  ogSiteName: string
  ogLocale?: string
  twitterSite?: string
  twitterCreator?: string
  twitterURL?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  twitterImageAlt?: string
  icon: string
  maskIcon: string
  maskIconColor: Color
}

const HTMLHead = ({
  title,
  appName,
  themeColor = new Color('#000'),
  description,
  ogURL,
  ogTitle = title,
  ogImage,
  ogImageAlt,
  ogDescription = description,
  ogSiteName,
  ogLocale = 'en_IE',
  twitterSite,
  twitterCreator,
  twitterURL = ogURL,
  twitterTitle = ogTitle,
  twitterDescription = ogDescription,
  twitterImage = ogImage,
  twitterImageAlt = ogImageAlt,
  icon,
  maskIcon,
  maskIconColor,
}: Props) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self'" /> */}
    {appName ? <meta name="application-name" content="WebApp Name" /> : ''}
    <meta name="theme-color" content={themeColor.toString()} />
    <meta name="description" content={description} />
    {/* Open Graph */}
    <meta property="og:url" content={ogURL} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:alt" content={ogImageAlt} />
    <meta property="og:description" content={ogDescription} />
    <meta property="og:site_name" content={ogSiteName} />
    <meta property="og:locale" content={ogLocale} />
    {/* Twitter Card */}
    <meta name="twitter:card" content="summary" />
    {twitterSite ? (
      <meta name="twitter:site" content={`@${twitterSite}`} />
    ) : (
      ''
    )}
    {twitterCreator ? (
      <meta name="twitter:creator" content={`@${twitterCreator}`} />
    ) : (
      ''
    )}
    <meta name="twitter:url" content={twitterURL} />
    <meta name="twitter:title" content={twitterTitle} />
    <meta name="twitter:description" content={twitterDescription} />
    <meta name="twitter:image" content={twitterImage} />
    <meta name="twitter:image:alt" content={twitterImageAlt} />
    {/* Icons */}
    <link rel="icon" sizes="192x192" href={icon} />
    <link rel="mask-icon" href={maskIcon} color={maskIconColor.toString()} />
    <link rel="apple-touch-icon" href={icon} />
    {/* Links */}
    <link rel="canonical" href={ogURL}></link>
  </Head>
)

export default HTMLHead

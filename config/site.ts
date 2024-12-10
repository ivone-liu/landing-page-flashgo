import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiAboutdotme, SiCardano, SiBroadcom } from "react-icons/si";

const OPEN_SOURCE_URL = 'https://github.com/weijunext/landing-page-boilerplate'

const baseSiteConfig = {
  name: "FlashGO",
  description:
    "Mac上更纯粹的时间笔记，让每天的笔记更好的归类记录",
  url: "https://flashgo.memocard.net",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: '/',
  keywords: ["flashgo", "笔记工具", "mac 笔记软件"],
  authors: [
    {
      name: "FlashGo",
      url: "#",
      twitter: '#',
    }
  ],
  creator: '@ivone',
  openSourceURL: '#',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  headerLinks: [
  //   { name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
  //   { name: 'twitter', href: "https://twitter.com/weijunext", icon: BsTwitterX },
  //   { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    { name: 'email', href: "mailto:ivone.lau@icloud.com", icon: MdEmail },
    // { name: 'twitter', href: "https://twitter.com/weijunext", icon: BsTwitterX },
    // { name: 'github', href: "https://github.com/weijunext/", icon: BsGithub },
    { name: 'IceBeer', href: "https://icebeer.top", icon: SiAboutdotme },
    // { name: 'Grabox', href: "https://grabox.net", icon: SiBroadcom },
    // { name: 'Memocard', href: "https://memocard.net", icon: SiCardano }
  ],
  footerProducts: [
    { url: 'https://grabox.net', name: 'Grabox' },
    { url: 'https://memocard.net', name: 'Memocard' },
    { url: 'https://icebeer.top', name: 'Blog' }
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "zh",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/logo.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/logo.png`],
    creator: baseSiteConfig.creator,
  },
}

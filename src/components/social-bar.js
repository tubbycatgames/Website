import React from "react"

import Discord from "../images/social/Discord.png"
import Facebook from "../images/social/Facebook.png"
import GameJolt from "../images/social/GameJolt.png"
import Instagram from "../images/social/Instagram.png"
import Itch from "../images/social/Itch.png"
import Twitter from "../images/social/Twitter.png"
import YouTube from "../images/social/YouTube.png"

import styles from "./social-bar.module.styl"

const socialData = [
  {
    alt: "Discord Social Media Icon",
    href: "https://discord.gg/SDRavf",
    src: Discord,
  },
  {
    alt: "Itch Page Icon",
    href: "https://itch.io/profile/tubbycatgames",
    src: Itch,
  },
  {
    alt: "Game Jolt Page Icon",
    href: "https://gamejolt.com/@tubbycatgames",
    src: GameJolt,
  },
  {
    alt: "Instagram Social Media Icon",
    href: "https://instagram.com/tubbycatgames",
    src: Instagram,
  },
  {
    alt: "Twitter Social Media Icon",
    href: "https://twitter.com/tubbycatgames",
    src: Twitter,
  },
  {
    alt: "Facebook Social Media Icon",
    href: "https://fb.me/tubbycatgames",
    src: Facebook,
  },
  {
    alt: "YouTube Channel Icon",
    href: "https://www.youtube.com/channel/UC_6l3SdhVjdtTd2DnHK2JbQ",
    src: YouTube,
  },
]

const SocialIcon = ({ alt, href, src }) => {
  return (
    <a href={href}>
      <img alt={alt} className={styles.icon} src={src} />
    </a>
  )
}

export default () => {
  const icons = socialData.map((data, index) => {
    return <SocialIcon {...data} key={`socialIcon${index}`} />
  })

  return <div className={styles.bar}>{icons}</div>
}

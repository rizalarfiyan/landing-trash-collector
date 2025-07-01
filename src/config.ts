import type { Site, Social } from "./types";

export const SITE: Site = {
    title: 'Trash Collector'
}

export const SOCIALS: Social[] = [
    {
        href: 'https://facebook.com/',
        title: `${SITE.title} on Facebook`,
        icon: 'ri:facebook-box-fill',
    },
    {
        href: 'https://x.com/',
        title: `${SITE.title} on Twitter`,
        icon: 'ri:twitter-x-fill',
    },
    {
        href: 'https://instagram.com/',
        title: `${SITE.title} on Instagram`,
        icon: 'ri:instagram-fill',
    },
    {
        href: 'https://linkedin.com/',
        title: `${SITE.title} on Linkedin`,
        icon: 'ri:linkedin-box-fill',
    },
    {
        href: 'https://youtube.com/',
        title: `${SITE.title} on Youtube`,
        icon: 'ri:youtube-fill',
    },
]

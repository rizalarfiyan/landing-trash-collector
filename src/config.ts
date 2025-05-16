import type { Site, Social } from "./types";

export const SITE: Site = {
    title: 'Trash Collector'
}

export const SOCIALS: Social[] = [
    {
        href: 'https://facebook.com/',
        title: `${SITE.title} on Facebook`,
        icon: 'facebook',
    },
    {
        href: 'https://x.com/',
        title: `${SITE.title} on Twitter`,
        icon: 'twitter',
    },
    {
        href: 'https://instagram.com/',
        title: `${SITE.title} on Instagram`,
        icon: 'instagram',
    },
    {
        href: 'https://linkedin.com/',
        title: `${SITE.title} on Linkedin`,
        icon: 'linkedin',
    },
    {
        href: 'https://youtube.com/',
        title: `${SITE.title} on Youtube`,
        icon: 'youtube',
    },
]
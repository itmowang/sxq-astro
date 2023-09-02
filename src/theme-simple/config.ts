import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'

const today = new Date();
const copy = `© ${today.getFullYear()} YOUR NAME HERE.`;

export const config = {
    site:{
        url:"/",
        title:SITE_TITLE,
        description:SITE_DESCRIPTION,
        favicon: "/favicon.svg",
        image: "/placeholder-social.jpg", // default image for meta tag.
        copy: copy,
        locales: "zh-CN", // 'en-us'
    },
    author: {
        name: "Mowang",
        avatar: "https://avatars.githubusercontent.com/u/137391282?v=4",
        bio: "Your bio",
    },
    menus: [
        { name: 'Home', path: '/' },
        { name: 'Archive', path: '/archive' },
        { name: 'About', path: '/about' },
    ],
} as any
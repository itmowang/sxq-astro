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
    archive: {
        title: "Archive",
        description: "Archive description",
    },
    indexBanner:{
        swiper:[
            {
                title:"欢迎访问本站",
                imgUrl:"https://www.toubiec.cn/xiaoqing/themes/Joe/npm/img/38.jpg",
                desc:"欢迎访问本站欢迎访问本站欢迎访问本站",
                url:"/"
            },
            {
                title:"欢迎访问本站",
                imgUrl:"https://www.toubiec.cn/xiaoqing/themes/Joe/npm/img/37.jpg",
                desc:"欢迎访问本站欢迎访问本站欢迎访问本站",
                url:"/"
            },
            {
                title:"欢迎访问本站",
                imgUrl:"https://www.toubiec.cn/xiaoqing/themes/Joe/npm/img/36.jpg",
                desc:"欢迎访问本站欢迎访问本站欢迎访问本站",
                url:"/"
            }
        ],
        recommend1:{
            title:"欢迎访问本站",
            imgUrl:"https://www.toubiec.cn/xiaoqing/themes/Joe/npm/img/36.jpg",
            desc:"欢迎访问本站欢迎访问本站欢迎访问本站",
            url:"/"
        },
        recommend2:{
            title:"欢迎访问本站",
            imgUrl:"https://www.toubiec.cn/xiaoqing/themes/Joe/npm/img/33.jpg",
            desc:"欢迎访问本站欢迎访问本站欢迎访问本站",
            url:"/"
        }

    },
    util:{
        convertTime(timeString, format) {
            const date = new Date(timeString);
            let convertedTime = '';
            switch (format) {
              case 'hh:mm:ss':
                convertedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                break;
              case 'hh:mm':
                convertedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                break;
              case 'YYYY-MM-DD':
                convertedTime = date.toISOString().split('T')[0];
                break;
              // 添加其他格式的转换
              default:
                convertedTime = date.toString();
                break;
            }
            return convertedTime;
          }
    }
} as any
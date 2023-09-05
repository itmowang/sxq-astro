import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'
import testImg1 from "@/theme-simple/assets/media/38.jpg";
import testImg2 from "@/theme-simple/assets/media/37.jpg"
import testImg3 from "@/theme-simple/assets/media/36.jpg"
import testImg4 from "@/theme-simple/assets/media/33.jpg"

const today = new Date();
const copy = `© ${today.getFullYear()} YOUR NAME HERE.`;

export const config = {
    site:{
        url:"/",
        title:SITE_TITLE,
        description:SITE_DESCRIPTION,
        favicon: "/favicon.ico",
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
        { name: 'Home', path: '/',icon:"#blog-baozi-01" },
        { name: 'Archive', path: '/archive',icon:"#blog-take-01"  },
        { name: 'About', path: '/about',icon:"#blog-shousi-01"  },
    ],
    archive: {
        title: "Archive",
        description: "Archive description",
        defaultHeroImage:testImg4.src
    },
    indexBanner:{
        swiper:[
            {
                title:"欢迎访问本站",
                imgUrl:testImg1.src,
                desc:"欢迎访问本站欢迎访问本站欢迎访问本站",
                url:"/"
            },
            {
                title:"欢迎访问本站",
                imgUrl:testImg2.src,
                desc:"欢迎访问本站欢迎访问本站欢迎访问本站",
                url:"/"
            },
            {
                title:"欢迎访问本站",
                imgUrl:testImg3.src,
                desc:"欢迎访问本站欢迎访问本站欢迎访问本站",
                url:"/"
            }
        ],
        recommend1:{
            title:"欢迎访问本站",
            imgUrl:testImg3.src,
            desc:"欢迎访问本站欢迎访问本站欢迎访问本站",
            url:"/"
        },
        recommend2:{
            title:"欢迎访问本站",
            imgUrl:testImg4.src,
            desc:"欢迎访问本站欢迎访问本站欢迎访问本站",
            url:"/"
        }
    },
    testImg:{

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
        },
        directoryExclusion(str){
            return str.replace(/\/.*/, '')
        }
    }
} as any
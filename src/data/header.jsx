import { FiBriefcase, FiFilm, FiHome, FiMonitor } from "react-icons/fi";

import { AiFillGithub } from "react-icons/ai";

import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "포트폴리오",
        icon: <FiHome />,
        src: "/"
    },
    {
        title: "경력사항",
        icon: <FiBriefcase />,
        src: "/crr"
    },
    {
        title: "광고영상",
        icon: <FiMonitor />,
        src: "/webd"
    },
    {
        title: "뮤직비디오",
        icon: <FiFilm />,
        src: "/mv"
    },
];


export const snsLink = [
    {
        title: "github",
        url: "https://github.com/webstoryboy",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/webstoryboy",
        icon: <AiFillYoutube />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/webstoryboy",
        icon: <AiOutlineInstagram />
    },
]

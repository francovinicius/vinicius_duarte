import Link from "next/link";
import React from 'react'

import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const socials = [
    { icon: <FaGithub />, path: "https://github.com/francovinicius" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/vinicius-franco-duarte/" },
    { icon: <FaWhatsapp />, path: "https://api.whatsapp.com/send?phone=5524999879994&text=Ol%C3%A1" },
]


const SocialIcons = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return(
                    <Link key={index} href={item.path} target="blank" className={iconStyles}>{item.icon}</Link>
                );
            })}
        </div >
    )
}

export default SocialIcons
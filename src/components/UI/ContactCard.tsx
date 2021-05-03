import React from 'react'
import { SocialMediaIcon } from "./Icons";
import { handleRedirectionToExternalLink } from "../Logic/handleRedirectionToExternalLink";



interface ContactCardProps{
    className?: string;
    social?: string[];
    phone?: string;
    email?: string;
}


const socialLinks:{[key:string]:string} =
{
    linkedin: "https://www.linkedin.com/in/pawan-bhatta-02a5531a0/",
    facebook: "https://www.facebook.com/pawan.bhatta.982/",
    github:"https://github.com/pawanbhatta178"
}


const ContactCard:React.FC<ContactCardProps> = ({social, phone,email, className}) => {
    return (
        <div className={`text-3xl flex justify-around gap-x-2 pb-8 ${className}`}>
            {social?.map(item => <SocialMediaIcon key={item} onClick={()=>handleRedirectionToExternalLink(socialLinks[item]) } className="" name={item}/>)}
        </div>
    )
}

export { ContactCard }

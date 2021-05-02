import React from 'react'
import {TechnologyIcon } from "./Icons";

interface LanguageCardProps{
    name: string;

}


const LanguageCard:React.FC<LanguageCardProps> = ({name}) => {
    return (
        <div className="px-1 flex items-center gap-x-2 border rounded-md shadow-sm hover:bg-gray-100 cursor-pointer">
            <TechnologyIcon name={name} />
            {name}
        </div>
    )
}

export { LanguageCard }

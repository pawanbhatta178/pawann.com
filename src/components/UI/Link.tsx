import React from 'react'

interface LinkProps{
    name: string;
    onClick: () => void;
    className?: string;
}


const Link:React.FC<LinkProps> = ({name, className,  onClick, children}) => {
    return (
        <span className={`cursor-pointer text-purple-500 text-sm border-b border-purple-400 ${className}`} onClick={onClick} >
            {name}
        </span>
    )
}

export { Link }

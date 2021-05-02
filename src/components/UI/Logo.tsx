import React from 'react'


enum logoTypes{
    SM,
    MD,
    LG,
}

interface logoProps{
    type?: logoTypes;
    className?: string;
}


const Logo: React.FC<logoProps> = ({ type, className }) => {
    
    if (type === logoTypes.SM) {
        <div className={`font-semibold font-mono text-2xl primary-text-color ${className}`}>pawann</div>
    }
    return (
        <div className={`font-semibold font-mono text-2xl primary-text-color ${className}`}>pawann</div>
    )
}

export { Logo }

import React from 'react'


enum buttonType{
    PRIMARY,
    SECONDARY
}

interface buttonProps{
    name: string;
    onClick: () => void;
    className?: string;
    type: buttonType;
}



const Button: React.FC<buttonProps> = ({ name, onClick, className, children, type }) => {

    if (type === buttonType.PRIMARY) {
        return <button onClick={onClick} className={`w-full sm:w-auto flex-none  hover:bg-purple-700 text-purple-800 hover:text-white text-lg leading-6 font-semibold py-3 px-10 border border-purple-500 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 shadow-2xl ${className}`}>{name} {children}</button>;

    }
    if (type === buttonType.SECONDARY) {
        return <button onClick={onClick} className={`w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-10 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 shadow-2xl ${className}`}>{name} {children}</button>;

    }
    return <button onClick={onClick} className={`w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-10 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 shadow-2xl ${className}`}>{name} {children}</button>;

    

}

export { Button,buttonType }

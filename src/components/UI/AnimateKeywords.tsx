import React, { useState, useEffect } from 'react';
import {TechnologyIcon } from "./TechnologyIcon";


interface Props{
    names: string[];
}

const AnimateKeywords: React.FC<Props> = ({ names }) => {
    
    const [activeKeyWord, setActiveKeyWord] = useState<number>(0);
    const [classForAnimation, setClassForAnimation] = useState<string>("typewriter-text");

    useEffect(() => {
        setClassForAnimation((current) => {
            const lengthOfString = names[activeKeyWord].length;
            if (lengthOfString < 5) {
                return "typewriter-text-sm"
            }
            else if (lengthOfString < 8) {
                return "typewriter-text-md"
            }
            else if (lengthOfString < 10) {
                return "typewriter-text-lg"
            }
            else {
                return "typewriter-text"
            }
        })
    }, [names, activeKeyWord]);

   
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveKeyWord((current) => { return ((current + 1) % names.length) });
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <span className={`font-mono text-gray-900 font-bold relative ${classForAnimation}`}>  {names[activeKeyWord]} <TechnologyIcon name={names[activeKeyWord]}/> </span>
    )
}





export { AnimateKeywords };

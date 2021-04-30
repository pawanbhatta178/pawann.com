import React, { useState, useEffect } from 'react';
import {GrReactjs} from 'react-icons/gr';
import { SiTailwindcss, SiPostgresql, SiReact, SiTypescript, SiDocker, SiKubernetes, SiCplusplus,SiNodeDotJs } from "react-icons/si";



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
        <span className={`font-mono text-gray-900 font-bold relative ${classForAnimation}`}>  {names[activeKeyWord]} <GetIcons name={names[activeKeyWord]}/> </span>
    )
}


interface iconProps{
    name: string;
}


const GetIcons: React.FC<iconProps> = ({ name }) => {
    if (name === "typescript") {
        return <SiTypescript className="inline-flex text-blue-550"/>
    }
    else if (name === "react") {
        return <SiReact className="inline-flex text-blue-250"/>
    }
    else if (name === "tailwind") {
        return <SiTailwindcss className="inline-flex text-blue-750"/>
    }
    else if (name === "postgres") {
        return <SiPostgresql className="inline-flex text-blue-650"/>
    }
    else if (name === "docker") {
        return <SiDocker className="inline-flex text-blue-350"/>
    }
    else if (name ==="kubernetes") {
        return <SiKubernetes className="inline-flex text-blue-450"/>
    }
    else if (name ==="c++") {
        return <SiCplusplus className="inline-flex text-blue-700"/>
    }
    else if (name ==="node.js") {
        return <SiNodeDotJs className="inline-flex text-green-550"/>
        }
    else {
        return <GrReactjs className="inline-flex" />
    }
}


export { AnimateKeywords };

import React, { useState, useEffect } from 'react';
import {GrReactjs} from 'react-icons/gr';
import styled, { keyframes } from "styled-components";




  


interface Props{
    names: string[];
}

const AnimateKeywords: React.FC<Props> = ({ names }) => {
    
    const [activeKeyWord, setActiveKeyWord] = useState<number>(0);


    useEffect(() => {
       const interval= setInterval(() => {
           setActiveKeyWord((current) => { return ((current + 1)%names.length) });
        }, 4000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
            <span className="font-mono text-gray-900 font-bold relative typewriter-text"> <span></span>  {names[activeKeyWord]} <GrReactjs className="inline-flex" /> </span>
    )
}

export { AnimateKeywords };

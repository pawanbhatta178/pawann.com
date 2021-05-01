import React from 'react'
import { SiTailwindcss, SiPostgresql, SiReact, SiTypescript, SiDocker, SiKubernetes, SiCplusplus,SiNodeDotJs, SiJava, SiPowershell } from "react-icons/si";
import { GoLinkExternal } from "react-icons/go";

interface TechnologyIconsProps  {
    name:string
}

 const TechnologyIcon: React.FC<TechnologyIconsProps> = ({ name }) => {
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
            else if (name ==="java") {
                return <SiJava className="inline-flex text-red-500"/>
            }
            else if (name==="shell") {
                return <SiPowershell className="inline-flex text-blue-550"/>
                }
            else {
                return <SiReact className="inline-flex" />
            }
        }

interface iconProps{
    name: string;
}



const Icon: React.FC<iconProps> = ({ name }) => {
    if (name === "external_link") {
        return <GoLinkExternal className="inline-flex"/>
    }
    else {
        return null;
    }
}



export { TechnologyIcon, Icon };

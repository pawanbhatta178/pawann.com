import React, {useState} from 'react'
import '../../styles/horizontalScroll.css';
import { Link } from "./Link";
import {TechnologyIcon, Icon  } from "./Icons";
import {Button, buttonType} from "./Button";
import { LanguageCard} from "./LanguageCard";
import {handleRedirectionToExternalLink } from "../Logic/handleRedirectionToExternalLink";

interface CardProps{
    title: string;
    languages: string[];
    technologies?: string[];
    topics: string[];
    shortDescription: string;
    description: string;
    link?: string;
    github?: string;
    picture?: string;
}


interface ScrollingCardsProps{
    cards: CardProps[];
}

const rotationClasses:string[] = ["rotate-2","rotate-2", "rotate-1", "rotate-1","-rotate-1","-rotate-2", "-rotate-2", "-rotate-1"];


const getRandomRotationClass = (): string => {
    const theRandomNumber = Math.floor(Math.random() * 8);
    return rotationClasses[theRandomNumber];
}



const Card: React.FC<CardProps> = (props: CardProps) => {
    const [readMoreToggle, setReadMoreToggle] = useState<boolean>(false);

    const onReadMoreClick = () => {
        setReadMoreToggle(!readMoreToggle);
    }

    return <div className={ `p-6 bg-white transition duration-300 ease-in-out shadow-lg rounded-xl flex-none w-11/12 sm:w-1/2 md:w-1/3 lg:1/4 transform ${getRandomRotationClass()} hover:rotate-0`}>
        <div className="flex flex-col h-full">
         
                <div className="flex-1 overflow-auto h-4/5  ">
                <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-gray-900 mb-3 sticky top-0 bg-white">{props.title}</h2>
                <div className="flex flex-wrap gap-x-2 pb-4">
                    {props.languages?.map((language)=><LanguageCard key={language} name={language}/>)}
                    {props.technologies?.map(technology => <LanguageCard key={technology} name={technology} />)}
                </div>
                <div className="text-gray-500 text-sm font-light  mx-auto mb-6">{props.shortDescription}</div>
                    {readMoreToggle && <div className="text-gray-500 text-sm font-light  mx-auto mb-6">{ props.description}</div>}
                    <Link name={readMoreToggle?"Less":"Read More"}  onClick={onReadMoreClick} />
                </div>

                <div className="flex-initial flex flex-col pt-2">
                {props?.link && <Button className="flex items-center justify-between" name="Live Demo" onClick={() =>handleRedirectionToExternalLink(props.link??"")} type={ buttonType.NEUTRAL}  ><Icon name="external_link"/></Button>}
                {props?.github && <Button className="flex items-center justify-between" name="Github" onClick={() => handleRedirectionToExternalLink(props.github??"")} type={buttonType.SECONDARY }><Icon name="external_link"/></Button>}
                </div>
            
        </div>
        
    </div>
}



const HorizontalScrollingCards: React.FC<ScrollingCardsProps> = ({cards}) => {
    return (
        <>
        <div className="absolute right-0 bottom-1/2 left-0 bg-gradient-to-t from-gray-100 pointer-events-none h-20"></div>
        <div className="flex space-x-12 scroll-container ">
            {cards.map(card => <Card key={card.title} {...card} />)}
            </div>
         </>
    )
}

export { HorizontalScrollingCards }

import React from 'react'

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


const Card: React.FC<CardProps> = (props:CardProps) => {
    return <div className="shadow-lg rounded-xl flex-none w-80 md:w-xl">
        <div>{props.title}</div>
        <div>{ props.shortDescription}</div>
        <div>{props.technologies }</div>
    </div>
}



const HorizontalScrollingCards: React.FC<ScrollingCardsProps> = ({cards}) => {
    return (
        <div>
            {cards.map(card => <Card key={card.title} {...card} />)}
        </div>
    )
}

export { HorizontalScrollingCards }

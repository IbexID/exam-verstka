import React from 'react';

interface IContestItemProps{
    text: string;
    image: number;
}

const ContestItem: React.FC<IContestItemProps> = ({text, image}) => {
    return (
        <div className='contest__item'>
            <img src={require(`../images/contest-item-${image}.png`)} alt="" />
            <p className='contest__item-text paragraph--medium'>{text}</p>
        </div>
    );
};

export default ContestItem;
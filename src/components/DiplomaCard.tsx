import React from 'react';
import Logo from './Logo';

interface IDiplomaCard {
    name: string;
    category: string;
    date: string;
    place: string;
}

const DiplomaCard: React.FC<IDiplomaCard> = ({ name, category, date, place }) => {
    return (
        <div className='diploma__card'>
            <div className="diploma__card-underlay">
                <h1 className='diploma__card-title'>Диплом</h1>
                <h4 className='diploma__card-subtitle'>Награждается</h4>
                <p className='diploma__card-name'>{name}</p>
                <p className='diploma__card-place'>{place} место</p>
                <p className='diploma__card-category'>{category}</p>
                <p className='diploma__card-date'>{date}</p>
            </div>
            <div className='diploma__card-image diploma__card-logo'>
                <Logo showLogo={false} />
            </div>
            <img className='diploma__card-image diploma__card-print' src={require('../images/diploma-print.png')} alt="print" />
            <img className='diploma__card-image diploma__card-water' src={require('../images/diploma-water-n-sand.png')} alt="" />
            <img className='diploma__card-image diploma__card-tree' src={require('../images/diploma-tree-n-eleph.png')} alt="" />
            <img className='diploma__card-image diploma__card-clouds' src={require('../images/diploma-clouds.png')} alt="" />
        </div>
    );
};

export default DiplomaCard;
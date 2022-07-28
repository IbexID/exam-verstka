import React from 'react';
import Logo from './Logo';
import SpaceCover from './SpaceCover';
import Timer from './timer/Timer';
import SolidButton from './ui/SolidButton';
import TransparentButton from './ui/TransparentButton';

const Cover: React.FC = () => {

    

    return (
        <div className='cover'>
            <div className="cover__space-wrapper">
                <div className="cover__space">
                    <SpaceCover />
                    <div className='cover__space-icons'>
                        <p className='cover__space-icon cover__num cover__num-zero cover__num--yellow'>0</p>
                        <p className='cover__space-icon cover__num cover__num-one cover__num--pink'>1</p>
                        <img className='cover__star-1 cover__star cover__space-icon' alt='' src={require('../images/cover-star.png')}/>
                        <img className='cover__star-2 cover__star cover__space-icon' alt='' src={require('../images/cover-star.png')}/>
                        <img className='cover__star-3 cover__star cover__space-icon' alt='' src={require('../images/cover-star.png')}/>
                        <img className='cover__star-4 cover__star cover__space-icon' alt='' src={require('../images/cover-star.png')}/>
                        <img className='cover__star-5 cover__star cover__space-icon' alt='' src={require('../images/cover-star.png')}/>
                        <img className='cover__star-6 cover__star cover__space-icon' alt='' src={require('../images/cover-star.png')}/>
                        <img className='cover__star-7 cover__star cover__space-icon' alt='' src={require('../images/cover-star.png')}/>
                        <img className='cover__star-8 cover__star cover__space-icon' alt='' src={require('../images/cover-star.png')}/>
                        <img className='cover__star-9 cover__star cover__space-icon' alt='' src={require('../images/cover-star.png')}/>
                        <img className='cover__star-10 cover__star cover__space-icon' alt='' src={require('../images/cover-star.png')}/>
                        <img className='cover__space-icon cover__atom' src={require('../images/cover-atom.png')} alt="" />
                        <img className='cover__space-icon cover__palette' src={require('../images/cover-palette.png')} alt="" />
                        <img className='cover__space-icon cover__airplane' src={require('../images/cover-airplane.png')} alt="" />
                        <img className='cover__space-icon cover__elephant' src={require('../images/cover-elephant.png')} alt="" />
                        <img className='cover__space-icon cover__planet' src={require('../images/cover-planet.png')} alt="" />
                        <img className='cover__space-icon cover__planet-2' src={require('../images/cover-planet-2.png')} alt="" />
                        <img className='cover__space-icon cover__planet-3' src={require('../images/cover-planet-3.png')} alt="" />
                        <img className='cover__space-icon cover__lightbulb' src={require('../images/cover-lightbulb.png')} alt="" />
                        <img className='cover__space-icon cover__balloon' src={require('../images/cover-balloon.png')} alt="" />
                        <img className='cover__space-icon cover__rocket' src={require('../images/cover-rocket.png')} alt="" />
                        <img className='cover__space-icon cover__clock' src={require('../images/cover-clock.png')} alt="" />
                        <img className='cover__space-icon cover__plus-sign' src={require('../images/cover-plus-sign.png')} alt="" />
                        <img className='cover__space-icon cover__division-sign' src={require('../images/cover-division-sign.png')} alt="" />
                        <img className='cover__space-icon cover__planes' src={require('../images/cover-planes.png')} alt="" />
                        <img className='cover__space-icon cover__girl' src={require('../images/cover-girl.png')} alt="" />
                        <img className='cover__space-icon cover__brush' src={require('../images/cover-brush.png')} alt="" />
                        </div>
                </div>
            </div>
            <div className="cover__top">
                <div className="cover__logo">
                    <Logo showLogo/>
                </div>
                <div className="cover__button">
                    <TransparentButton text={'Войти'} />
                </div>
            </div>
            <div className="cover__info">
                <p className="cover__info-company">От компании СлонУМ</p>
                <h1 className="cover__info-title">Всероссийский конкурс<br />Детского рисунка</h1>
                <p className="cover__info-description paragraph--small">Участвуйте в конкурсе и получайте призы в различных<br />номинациях детского рисунка для всех возрастов</p>
            </div>
            <div className="cover__bottom">
                <div className="cover__bottom-button">
                    <SolidButton text='Участвовать' />
                </div>
                <div className="cover__bottom-timer">
                    <Timer date={new Date('08.04.2022')} />
                </div>
            </div>
        </div>
    );
};

export default Cover;
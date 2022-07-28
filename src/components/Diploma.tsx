import React from 'react';
import DiplomaCard from './DiplomaCard';

const Diploma: React.FC = () => {
    return (
        <article className='diploma'>
            <div className="diploma__info">
                <h2 className='diploma__info-title'>Выдаём <span className='wavy-underline'>дипломы</span> участникам</h2>
                <p className='diploma__info-text paragraph--small'>Жюри конкурса рассмотрит работы и выделит победителей по городам и возрастным категориям, а также определит другие номинации, подчеркнув уникальную особенность каждого конкретного рисунка — дипломы получат все дети!</p>
                <p className='diploma__info-text paragraph--small'>Скачать диплом можно будет в личном кабинете через сутки после окончания конкурса, дополнительно вышлем его на e-mail.</p>
                <p className='diploma__info-text paragraph--small'>Со слоном к победам напролом!</p>
            </div>
            <div className="diploma__card-wrapper">
                <DiplomaCard name='Гасенко Алина' place='I' category='во Всероссийском конкурсе детских рисунков &#10;«Моё счастливое лето»&#10;Возраст от 0 до 4 лет, г. Калуга' date='15.08.2022' />
            </div>
        </article>
    );
};

export default Diploma;
import React from 'react';
import SocialIcon from '../ui/SocialIcon'

interface IRegisterBannerProps {
  oldPrice: number;
  newPrice: number;
}

const RegisterBanner: React.FC<IRegisterBannerProps> = ({ newPrice, oldPrice }) => {
  return (
    <div className='register__banner'>
      <div className='register__banner-top'>
        <svg
          className='register__banner-flag'
          width='292'
          height='110'
          viewBox='0 0 292 110'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M281.07 14.7005H292L281.07 0V14.7005Z' fill='#0E8958' />
          <path d='M10.9305 14.7005H0L10.9305 0V14.7005Z' fill='#0E8958' />
          <path
            d='M281.07 14.7005V0H10.9305V14.7005V110L146 74.5161L281.07 110V14.7005Z'
            fill='#14A76C'
          />
        </svg>
        <p className='register__banner-name'>Скидка за репост</p>
      </div>
      <div className='register__banner-content'>
        <p className='register__banner-text paragraph--medium'>Стоимость участия:</p>
        <div className='register__banner-prices'>
          <p className='register__banner-new'>{newPrice}₽</p>
          <p className='register__banner-old'>{oldPrice} ₽</p>
        </div>
        <p className='register__banner-text paragraph--medium'>При наличии репоста в соцсетях :)</p>
      </div>

      <div className='register__banner-bottom'>
        <p className='register__banner-discount'>Получить скидку:</p>
        <div className='register__banner-socials'>
          <a href='#!'>
            <SocialIcon name='vk' />
          </a>
          <a href='#!'>
            <SocialIcon name='ok' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default RegisterBanner

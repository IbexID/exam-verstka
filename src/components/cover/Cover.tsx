import React from 'react'
import Logo from '../Logo'
import SpaceCover from './SpaceCover'
import Timer from '../timer/Timer'
import SolidButton from '../ui/SolidButton'
import TransparentButton from '../ui/TransparentButton'
import CoverImage from './CoverImage'

const Cover: React.FC = () => {
  return (
    <div className='cover'>
      <div className='cover__space-wrapper'>
        <div className='cover__space'>
          <SpaceCover />
          <div className='cover__space-icons'>
            <p className='cover__space-icon cover__num cover__num-zero cover__num--yellow'>0</p>
            <p className='cover__space-icon cover__num cover__num-one cover__num--pink'>1</p>
            <CoverImage imageName='star' classes={['cover__star', 'cover__star-1']} />
            <CoverImage imageName='star' classes={['cover__star', 'cover__star-2']} />
            <CoverImage imageName='star' classes={['cover__star', 'cover__star-3']} />
            <CoverImage imageName='star' classes={['cover__star', 'cover__star-4']} />
            <CoverImage imageName='star' classes={['cover__star', 'cover__star-5']} />
            <CoverImage imageName='star' classes={['cover__star', 'cover__star-6']} />
            <CoverImage imageName='star' classes={['cover__star', 'cover__star-7']} />
            <CoverImage imageName='star' classes={['cover__star', 'cover__star-8']} />
            <CoverImage imageName='star' classes={['cover__star', 'cover__star-9']} />
            <CoverImage imageName='star' classes={['cover__star', 'cover__star-10']} />

            <CoverImage imageName='atom' classes={['cover__atom']} />
            <CoverImage imageName='palette' classes={['cover__palette']} />
            <CoverImage imageName='airplane' classes={['cover__airplane']} />
            <CoverImage imageName='elephant' classes={['cover__elephant']} />
            <CoverImage imageName='planet' classes={['cover__planet']} />
            <CoverImage imageName='planet-2' classes={['cover__planet-2']} />
            <CoverImage imageName='planet-3' classes={['cover__planet-3']} />
            <CoverImage imageName='lightbulb' classes={['cover__lightbulb']} />
            <CoverImage imageName='balloon' classes={['cover__balloon']} />
            <CoverImage imageName='rocket' classes={['cover__rocket']} />
            <CoverImage imageName='clock' classes={['cover__clock']} />
            <CoverImage imageName='plus-sign' classes={['cover__plus-sign']} />
            <CoverImage imageName='division-sign' classes={['cover__division-sign']} />
            <CoverImage imageName='planes' classes={['cover__planes']} />
            <CoverImage imageName='girl' classes={['cover__girl']} />
            <CoverImage imageName='brush' classes={['cover__brush']} />
          </div>
        </div>
      </div>
      <div className='cover__top'>
        <div className='cover__logo'>
          <Logo showLogo />
        </div>
        <div className='cover__button'>
          <TransparentButton text={'Войти'} />
        </div>
      </div>
      <div className='cover__info'>
        <p className='cover__info-company'>От компании СлонУМ</p>
        <h1 className='cover__info-title'>
          Всероссийский конкурс
          <br />
          Детского рисунка
        </h1>
        <p className='cover__info-description paragraph--small'>
          Участвуйте в конкурсе и получайте призы в различных
          <br />
          номинациях детского рисунка для всех возрастов
        </p>
      </div>
      <div className='cover__bottom'>
        <div className='cover__bottom-button'>
          <SolidButton text='Участвовать' />
        </div>
        <div className='cover__bottom-timer'>
          <Timer date={new Date('08.28.2022')} />
        </div>
      </div>
    </div>
  )
}

export default Cover

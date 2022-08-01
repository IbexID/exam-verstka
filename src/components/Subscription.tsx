import React from 'react'
import Checkbox from './ui/Checkbox'
import Input from './ui/Input'
import SolidButton from './ui/SolidButton'

const Subscription: React.FC = () => {
  return (
    <div className='subscription'>
      <div className='subscription__wrapper'>
        <h2 className='subscription__title'>Подпишись на нашу рассылку</h2>
        <p className='subscription__text paragraph--small'>
          Обещаем присылать только самое важное
          <br /> и интересное :)
        </p>
        <form className='subscription__form'>
          <div className='subscription__top'>
            <Input type='email' placeholder='Email' />
            <SolidButton text='Отправить' />
          </div>
          <Checkbox color='white' sub={true} />
        </form>
      </div>
    </div>
  )
}

export default Subscription

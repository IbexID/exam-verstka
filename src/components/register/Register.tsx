import React from 'react';
import RegisterBanner from './RegisterBanner';
import RegisterForm from './RegisterForm';


const Register: React.FC = () => {
  const createFlyingPlane = () => {
    const flyingPlane = document.querySelector('.register__flying-plane')!
    flyingPlane.classList.add('register__plane-appear')
  }

  const movePlaneOne = () => {
    const planeOne = document.querySelector('.register__form-plane-1')!
    const flyingPlane = document.querySelector('.register__flying-plane')!
    if (flyingPlane.classList.contains('register__plane-appear')) {
      planeOne.classList.add('register__move-plane-1')
    }
  }
  const movePlaneTwo = () => {
    const planeTwo = document.querySelector('.register__form-plane-2')!
    const flyingPlane = document.querySelector('.register__flying-plane')!
    if (flyingPlane.classList.contains('register__plane-appear')) {
      planeTwo.classList.add('register__move-plane-2')
    }
  }

  const createPlanesAnimation = () => {
    createFlyingPlane()
    movePlaneOne()
    movePlaneTwo()
  }

  return (
    <article
      className='register'
      onClick={() => {
        createPlanesAnimation()
      }}
    >
      <RegisterBanner oldPrice={299} newPrice={149} />
      <div className='register__content'>
        <h2 className='register__title'>Зарегистрируйтесь, чтобы участвовать</h2>
        <RegisterForm />
      </div>
      <img
        className='register__flying-plane'
        src={require('../../images/flying-plane.png')}
        alt=''
      />
    </article>
  )
}

export default Register

import React from 'react';
import RegisterBanner from './RegisterBanner';
import RegisterForm from './RegisterForm';

const Register: React.FC = () => {
    return (
        <article className='register'>
            <RegisterBanner oldPrice={299} newPrice={149} />
            <div className="register__content">
                <h2 className='register__title'>Зарегистрируйтесь, чтобы участвовать</h2>
                <RegisterForm />
            </div>
        </article>
    );
};

export default Register;
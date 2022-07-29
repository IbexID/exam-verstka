import React from 'react';
import Checkbox from './ui/Checkbox';
import RegisterInput from './ui/RegisterInput';
import SolidButton from './ui/SolidButton';

const RegisterForm: React.FC = () => {

    const inputs = [
        {
            id: 1,
            placeholder: 'ФИО ребёнка',
            type: 'text',
            autoComplete: 'name'
        },
        {
            id: 2,
            placeholder: 'Дата рождения',
            type: 'text',
            autoComplete: 'bday'
        },
        {
            id: 3,
            placeholder: 'Город',
            type: 'text',
            autoComplete: 'address-level2'
        },
        {
            id: 4,
            placeholder: 'Email',
            type: 'email',
            autoComplete: 'email'
        },
        {
            id: 5,
            placeholder: 'Пароль',
            type: 'password',
            autoComplete: 'new-password'
        },
    ]

    return (
        <form className='register__form'>
            <div className="register__inputs-wrapper">
                {inputs.map(input => {
                    return <RegisterInput
                        type={input.type}
                        key={input.id}
                        placeholder={input.placeholder}
                        autoComplete={input.autoComplete}
                    />
                })}
            </div>
            <Checkbox color='green' />
            <div className="register__form-bottom">
                <SolidButton text='Участвовать' red />
            </div>
        </form>
    );
};

export default RegisterForm;
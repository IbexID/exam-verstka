import React from 'react';

interface IInput{
    placeholder: string;
    type: string;
}

const Input: React.FC<IInput> = ({placeholder, type}) => {
    return (
        <input 
        className='input'
        placeholder={placeholder}
        type={type}
        />
    );
};

export default Input;
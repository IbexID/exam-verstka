import React from 'react';

interface IButtonProps{
    text: string;
}

const Button: React.FC<IButtonProps> = ({text}) => {
    return (
        <button className='primaryButton'>
            {text}
        </button>
    );
};

export default Button;
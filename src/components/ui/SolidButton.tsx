import React from 'react';

export interface IButtonProps{
    text: string;
}

const SolidButton: React.FC<IButtonProps> = ({text}) => {
    return (
        <button className='solid-button'>
            {text}
        </button>
    );
};

export default SolidButton;
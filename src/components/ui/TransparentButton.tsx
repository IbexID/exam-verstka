import React from 'react';
import { IButtonProps } from './SolidButton';

const TransparentButton: React.FC<IButtonProps> = ({text}) => {
    return (
        <button className='transparent-button'>
            {text}
        </button>
    );
};

export default TransparentButton;
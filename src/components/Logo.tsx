import React from 'react';

const Logo: React.FC = () => {
    return (
        <div className='logo'>
            <img className='logo__img' src={require('../images/cover-logo.png')} alt="logo" />
            <p className='logo__text'>Слон<span className='logo__text-emphasis'>УМ</span></p>
        </div>
    );
};

export default Logo;
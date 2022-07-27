import React from 'react';

interface IFooterSocialIcon{
    name: string;
}

const FooterSocialIcon: React.FC<IFooterSocialIcon> = ({name}) => {
    return (
        <img 
        className='footer__social-icon'
        src={require(`../../images/icons/footer-${name}.png`)}
        alt={name}
        />
            
        
    );
};

export default FooterSocialIcon;
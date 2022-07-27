import React from 'react';

interface IFooterNavLink {
    text: string;
    link?: string;
}

const FooterNavLink: React.FC<IFooterNavLink> = ({ text, link }) => {
    return (
        <li className='footer__links-item'>
            {link
                ? <a href={link}>
                    {text}
                    </a>
                : <a href='#!'>
                    {text}
                    </a>
            }
        </li>
    );
};

export default FooterNavLink;
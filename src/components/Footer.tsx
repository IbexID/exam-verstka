import React from 'react';
import FooterNavLink from './FooterNavLink';
import FooterSocialIcon from './ui/FooterSocialIcon';

const Footer: React.FC = () => {

    const scrollToTop = () =>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    return (
        <footer className='footer'>
            <div className="footer__social">
                <p className="footer__social-info">Наши соцсети:</p>
                <a href='#!'><FooterSocialIcon name='twitter' /></a>
                <a href='#!'><FooterSocialIcon name='yz' /></a>
                <a href='#!'><FooterSocialIcon name='vk' /></a>
            </div>
            <div className="footer__content">
                <nav className="footer__content-links">
                    <ul className='footer__links-list'>
                        <FooterNavLink text='Главная' />
                        <FooterNavLink text='Личный кабинет' />
                        <FooterNavLink text='Контакты' />
                        <FooterNavLink text='Конфиденциальность' />
                    </ul>
                </nav>
                <p className='footer__content-copyright'>@ Все права защищены.  ООО”Слонум” 2022</p>
            </div>
            <div className="footer__up">
                <p className="footer__up-info">Наверх</p>
                <button className='footer__up-button' onClick={()=>{scrollToTop()}}>
                    <img src={require('../images/icons/footer-up.svg').default} alt=''/>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
import React from "react";

const About: React.FC = () => {
    return (
        <article className='about'>
            <p className='about__text paragraph--large'>Компания <b>СлонУм</b> – проводит конкурс для детей в котором могут участвовать ребята <span className='about__text-emphasis'>всех возрастов!</span> Номинации в которых можно победить, есть возможность проявить себя во всех направлениях и даже <span className='about__text-emphasis'>без художественных способностей.</span></p>
        </article>
    );
};

export default About;
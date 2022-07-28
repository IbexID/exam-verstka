import React from 'react';
import PlanStep from './ui/PlanStep';

const Plan: React.FC = () => {

    const planSteps = [
        {
            step: 1,
            text: 'Зарегистрируйтесь на конкурс ',
            link: '#!'
        },
        {
            step: 2,
            text: 'Выполните все условия конкурса',
            link: '#!'
        },
        {
            step: 3,
            text: `Загрузите рисунок Здесь или в Личном кабинете`,
            link: '#!'
        }
    ]

    return (
        <article className='plan'>
            <h2 className='plan__title'>Пошаговый <span className='wavy-underline'>план</span></h2>
            <div className="plan__steps">
                {planSteps.map( step => {
                    return (
                        <PlanStep link={step.link} step={step.step} text={step.text} key={step.step} />
                    )
                })}
            </div>
        </article>
    );
};

export default Plan;
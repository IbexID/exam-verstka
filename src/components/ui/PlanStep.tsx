import React from 'react';

interface IPlanStep {
    step: number;
    text: string;
    link: string;
}


const PlanStep: React.FC<IPlanStep> = ({step, text, link}) => {

    const referenceLink = <a className='plan__step-link' href={link}>Здесь</a>

    return (
        <div className={`plan__step plan__step-${step}`} >
            <div className="plan__step-circle">
                <p className="plan__step-count">{step}</p>
            </div>
            
            {
            step === 1 
            ? <p className='plan__step-info'>{text}{referenceLink}</p>  :
            step === 2
            ? <p className='plan__step-info'>{text}</p>  :
            <p className='plan__step-info'>
                {text.slice(0, text.indexOf('Здесь'))}
                {referenceLink}
                {text.slice(text.indexOf('Здесь') + 5)}</p>
            
        
        }
            
            
        </div>
    );
};

export default PlanStep;
import React, { ReactNode } from 'react';

interface IPlanStep {
    step: number;
    text: ReactNode;
}


const PlanStep: React.FC<IPlanStep> = ({step, text}) => {
    return (
        <div className='plan__step'>
            <div className="plan__step-circle">
                <p className="plan__step-count">{step}</p>
            </div>
            <p className='plan__step-info'>{text}</p>
        </div>
    );
};

export default PlanStep;
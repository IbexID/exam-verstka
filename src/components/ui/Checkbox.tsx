import React from 'react';

interface ICheckboxProps {
    color: string;
    sub?: boolean;
}

const Checkbox: React.FC<ICheckboxProps> = ({ color, sub }) => {
    return (
        <div className="checkbox">
            <label className={sub ? 'checkbox__label checkbox__label--gray' : 'checkbox__label'}> 
            Отправляя данные, я соглашаюсь с <strong><a href='#!' className={`checkbox__link--${color}`}>Условиями конкурса</a><br /> 
            и <a href='#!' className={`checkbox__link--${color}`}>Политикой обработки данных</a></strong>

                <input type="checkbox" className="checkbox__input"  />
                <span className="checkbox__tick"></span>
            </label>
        </div>
    );
};

export default Checkbox;
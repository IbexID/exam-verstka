import React from 'react';

interface ITimerPad{
    time: any;
    type: string;
}

const TimerPad: React.FC<ITimerPad> = ({time, type}) => {
    return (
        <div className='timer__pad'>
            <p className='timer__pad-time'>{time}</p>
            
                {
                  type==='day' ? <p className='timer__text'>дней</p>
                : type==='hours' ? <p className='timer__text'>часов <br/> <span className='timer__subtext'>по МСК</span></p>
                : <p className='timer__text'>минут</p>
                }
                
        </div>
    );
};

export default TimerPad;
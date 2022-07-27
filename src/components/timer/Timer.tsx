import React from 'react';
import TimerPad from './TimerPad';

interface ITimer{
    date: Date;
}

const Timer: React.FC<ITimer> = ({date}) => {

    const countdownDate = new Date('08-04-2022');
  
  
    const diff = (date.getTime() - new Date().getTime())

    const days = Math.floor(diff / 1000 / 60 / 60 / 24).toString().length > 1 ? Math.floor(diff / 1000 / 60 / 60 / 24).toString() : '0' + Math.floor(diff / 1000 / 60 / 60 / 24).toString();
    const hours = Math.floor((diff / 1000 / 60 / 60) % 24).toString().length > 1 ? Math.floor((diff / 1000 / 60 / 60) % 24).toString() : '0' + Math.floor((diff / 1000 / 60 / 60) % 24).toString();
    const minutes = Math.floor((diff / 1000 / 60) % 60).toString().length > 1 ? Math.floor((diff / 1000 / 60) % 60).toString() : '0' + Math.floor((diff / 1000 / 60) % 60).toString();

    return (
        <div className='timer'>
            <TimerPad time={days} type='day'/>
            <span className='timer__colon'>:</span>
            <TimerPad time={hours} type='hours'/>
            <span className='timer__colon'>:</span>
            <TimerPad time={minutes} type='minutes' />
        </div>
    );
};

export default Timer;
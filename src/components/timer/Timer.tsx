import React, { useEffect, useState } from 'react';
import TimerPad from './TimerPad';

interface ITimer {
    date: Date;
}

const Timer: React.FC<ITimer> = ({ date }) => {

    const [minutes, setMinutes] = useState('43')
    const [hours, setHours] = useState('09')
    const [days, setDays] = useState('01')

    const setTime = () => {
        setInterval(() => {
            const diff = date.getTime() - new Date().getTime()
            const daysToSet = Math.floor(diff / 1000 / 60 / 60 / 24).toString().length > 1 ? Math.floor(diff / 1000 / 60 / 60 / 24).toString() : '0' + Math.floor(diff / 1000 / 60 / 60 / 24).toString();
            const hoursToSet = Math.floor((diff / 1000 / 60 / 60) % 24).toString().length > 1 ? Math.floor((diff / 1000 / 60 / 60) % 24).toString() : '0' + Math.floor((diff / 1000 / 60 / 60) % 24).toString();
            const minutesToSet = Math.floor((diff / 1000 / 60) % 60).toString().length > 1 ? Math.floor((diff / 1000 / 60) % 60).toString() : '0' + Math.floor((diff / 1000 / 60) % 60).toString();
            setDays(daysToSet);
            setHours(hoursToSet);
            setMinutes(minutesToSet)
        }, 1000)
    }
    useEffect(()=>{
        setTime()
    }, [minutes])
    

    return (
        <div className='timer'>
            <TimerPad time={days} type='days' />
            <span className='timer__colon'>:</span>
            <TimerPad time={hours} type='hours' />
            <span className='timer__colon'>:</span>
            <TimerPad time={minutes} type='minutes' />
        </div>
    );
};

export default Timer;
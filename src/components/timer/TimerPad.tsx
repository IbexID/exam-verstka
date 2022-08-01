import React from 'react';

interface ITimerPad{
    time: string;
    type: string;
}

const TimerPad: React.FC<ITimerPad> = ({time, type}) => {

    function declensionNum(num: string, words: string[]) {
        const parsedNum = parseInt(num)
        return words[(parsedNum % 100 > 4 && parsedNum % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(parsedNum % 10 < 5) ? parsedNum % 10 : 5]];
      }
    const determineTimeText = (type: string) =>{
        let timeText: string;
        switch(type){
            case 'days':
                timeText = declensionNum(time, ['день', 'дня', 'дней']);
                return timeText;
            case 'hours':
                timeText = declensionNum(time, ['час', 'часа', 'часов']);
                return timeText;
            case 'minutes':
                timeText = declensionNum(time, ['минута', 'минуты', 'минут']);
                return timeText;
            
        }
    }
    const timeText = determineTimeText(type)
    
    
    return (
        <div className='timer__pad'>
            <p className='timer__pad-time'>{time}</p>

            { type==='hours' ? <p className='timer__text'>{timeText} <br/> <span className='timer__subtext'>по МСК</span></p>
            : <p className='timer__text'>{timeText}</p>
            }
                
        </div>
    );
};

export default TimerPad;
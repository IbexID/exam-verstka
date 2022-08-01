import React from 'react'

interface IParticipationGoalItemProps {
  text: string
  id: number
}

const ParticipationGoalItem: React.FC<IParticipationGoalItemProps> = ({ text, id }) => {
  return (
    <div className='goal__item'>
      <img src={require(`../../images/contest-item-${id}.png`)} alt='' />
      <p className='goal__item-text paragraph--medium'>
        {text}
        {id === 6 ? (
          <a href='#!' className='goal__item-link'>
            Подписывайтесь!
          </a>
        ) : (
          ''
        )}
      </p>
    </div>
  )
}

export default ParticipationGoalItem

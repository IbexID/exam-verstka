import React from 'react'
import ParticipationGoalItem from './ParticipationGoalItem'

const ParticipationGoal: React.FC = () => {
  const goals = [
    {
      id: 1,
      text: 'Шанс занять 1 место — в вашем городе и по всей России',
    },
    {
      id: 2,
      text: 'Развитие самостоятельности + свободное время для родителей ;)',
    },
    {
      id: 3,
      text: 'Персональный диплом в разных номинациях каждому участнику',
    },
    {
      id: 4,
      text: 'Призы и скидки для подписчиков и авторизованных пользователей',
    },
    {
      id: 5,
      text: 'Бесплатный диплом на email — через 1 день после конкурса',
    },
    {
      id: 6,
      text: 'Публикация работ победителей во ВКонтакте. ',
    },
  ]

  return (
    <article className='goal'>
      <h2 className='goal__title'>
        Для чего <span className='wavy-underline'>нужно</span> участвовать
      </h2>
      <div className='goal__tiles'>
        {goals.map((goal) => {
          return <ParticipationGoalItem key={goal.id} text={goal.text} id={goal.id} />
        })}
      </div>
    </article>
  )
}

export default ParticipationGoal

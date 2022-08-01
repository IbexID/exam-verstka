import React from 'react'
import QuestionItem from './QuestionItem'

const Questions: React.FC = () => {
  const questions = [
    'Может ли ребёнок заниматься самостоятельно?',
    'Как происходит оплата?',
    'Есть ли гарантии усвоения материала?',
    'С кем будет общаться мой ребёнок?',
    'Каковы принципы обучения?',
    'Сколько раз в неделю можно заниматься?',
  ]

  return (
    <article className='questions'>
      <h2 className='questions__title'>Вопрос/Ответ</h2>
      {questions.map((q) => {
        return <QuestionItem key={q} question={q} />
      })}
    </article>
  )
}

export default Questions

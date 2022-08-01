import React from 'react'
import ExpandButton from './ui/ExpandButton'

interface IQuestionItemProps {
  question: string
  answer?: string
}

const QuestionItem: React.FC<IQuestionItemProps> = ({ question, answer }) => {
  return (
    <div className='questions__item'>
      <p className='questions__text paragraph--medium'>{question}</p>
      <ExpandButton />
      {answer && <p className='questions__text paragraph--small'>{answer}</p>}
    </div>
  )
}

export default QuestionItem

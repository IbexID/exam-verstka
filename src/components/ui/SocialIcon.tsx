import React from 'react'

interface ISocialIcon {
  name: string
}

const SocialIcon: React.FC<ISocialIcon> = ({ name }) => {
  return (
    <img className='social-icon' src={require(`../../images/icons/${name}-icon.png`)} alt={name} />
  )
}

export default SocialIcon

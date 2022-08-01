import React from 'react'

interface ICoverImage {
  imageName: string
  classes: string[]
}

const CoverImage: React.FC<ICoverImage> = ({ imageName, classes }) => {
  return (
    <img
      alt=''
      className={'cover__space-icon ' + classes.join(' ')}
      src={require(`../../images/cover-${imageName}.png`)}
    ></img>
  )
}

export default CoverImage

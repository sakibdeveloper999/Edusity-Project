import React from 'react'
import './Title.css'

const Title = ({subTitle, title}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h3>{title}</h3>
    </div>
  )
}

export default Title